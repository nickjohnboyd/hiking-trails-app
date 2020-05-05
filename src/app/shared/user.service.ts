import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { Trail } from '../models/trail';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersRef: AngularFirestoreCollection<User>;

  user: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    emailVerified: false
  };

  users: User[];

  constructor(
    // public authService: AuthService,
    private db: AngularFirestore
  ) {
    this.usersRef = this.db.collection<User>('users');
  }

  setUser(user) {
    console.log('here');
    console.log(user);
    const currentUser = this.getCurrentUser(user);
    console.log(currentUser);
    if(currentUser !== undefined) {
      this.user = currentUser;
      return;
    } else {
      this.user.uid = user.uid;
      this.user.email = user.email;
      this.user.displayName = user.displayName;
      this.user.photoURL = user.photoURL;
      this.user.emailVerified = user.emailVerified;
      console.log(this.user);
      this.saveUser(this.user);
    }  
  }

  getCurrentUser(user): User {
    let newUser;
    this.getUsersObservable().subscribe(users => {
      const hasUser = users.find(u => {
        return u.uid === user.uid;
      });
      console.log(hasUser);
      if(hasUser !== undefined) {
        newUser = hasUser;
      } else {
        newUser = undefined;
      }
      console.log(newUser);
      return newUser;
    });
    setTimeout(() => {
      console.log('timeout')
    }, 2000);
    return newUser;
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
            };
          });
        })
      );
  }

  saveUser(user: User) {
    return this.usersRef.add(user);
  }

  getUser() {
    return this.user;
  }

  handleFavorites(trail: Trail, favorited: boolean) {
    // this.user = this.authService.getUser();
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
  }

  addToCompleted(trail: Trail) {
    // this.user = this.authService.getUser();
    console.log(this.user);
    if(this.user.completed === undefined) this.user.completed = [];
    this.user.completed.push(trail);
  }
}
