import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Trail } from '../models/trail';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersRef: AngularFirestoreCollection<User>;

  loggedIn: boolean = false;

  user: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    emailVerified: false
  };

  currentUser: User;

  user$: Observable<User>;

  users: User[];

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.usersRef = this.db.collection<User>('users');
  }

  checkUser(user) {
    const usersObservable = this.getUsersObservable().subscribe(users => {
      this.users = users;
      console.log(this.users);

      const userFound = this.users.find(dbUser => user.uid === dbUser.uid);

      if(userFound !== undefined) {
        console.log('user was found');
        this.user = userFound;
        console.log(this.user);
      } else {
        console.log('setting new user');
        this.setUser(user);
      }

      usersObservable.unsubscribe();
    });

  }

  setUser(user) {
    this.user.uid = user.uid;
    this.user.email = user.email;
    this.user.displayName = user.displayName;
    this.user.photoURL = user.photoURL;
    this.user.emailVerified = user.emailVerified;
    console.log(this.user);
    this.saveUser(this.user);
  }

  updateCurrentUser() {
    this.afAuth.authState.pipe(
      switchMap(googleUser => {
        return this.afs.doc<User>(`users/${googleUser.uid}`).valueChanges();
      }),
      tap(user => {
        this.currentUser = user;
      })
    ).subscribe();
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUserObservable(uid: string) {
    return this.db.doc<User>(`users/${uid}`).valueChanges();
  }

  getUsersObservable(): Observable<User[]> {
    return this.usersRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<User>[]): User[] => {
          return items.map((item: DocumentChangeAction<User>): User => {
            return {
              uid: item.payload.doc.data().uid,
              email: item.payload.doc.data().email,
              displayName: item.payload.doc.data().displayName,
              photoURL: item.payload.doc.data().photoURL,
              emailVerified: item.payload.doc.data().emailVerified,
              favorites: item.payload.doc.data().favorites,
              completed: item.payload.doc.data().completed,
              id: item.payload.doc.id
            };
          });
        })
      );
  }

  saveUser(user: User) {
    return this.usersRef.add(user);
  }

  editUser(user: User) {
    if(this.user.favorites === undefined) this.user.favorites = [];
    if(this.user.completed === undefined) this.user.completed = [];
    console.log(user);
    return this.usersRef.doc(user.id).update(user);
  }

  deleteUser(user: User) {
    console.log('delete');
    console.log(user);
    return this.usersRef.doc(user.id).delete();
  }

  handleFavorites(trail: Trail, favorited: boolean) {
    if(favorited) {
      if(this.user.favorites === undefined) this.user.favorites = [];
      this.user.favorites.push(trail);
      console.log(this.user.favorites);
    }
    else if(!favorited) {
      const favorites = this.user.favorites;
      favorites.splice(favorites.indexOf(favorites.find(item => item === trail)), 1);
      console.log(this.user.favorites);
    }
    this.editUser(this.user);
  }

  handleCompleted(trail: Trail, completed: boolean) {
    if(completed) {
      if(this.user.completed === undefined) this.user.completed = [];
      this.user.completed.push(trail);
      console.log(this.user.completed);
    }
    else if(!completed) {
      const completed = this.user.completed;
      completed.splice(completed.indexOf(completed.find(item => item === trail)), 1);
      console.log(this.user.completed);
    }
    this.editUser(this.user);
  }

  isLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }
}
