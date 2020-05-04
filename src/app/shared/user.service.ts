import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { Trail } from '../models/trail';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersRef: AngularFirestoreCollection<User>

  user: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    emailVerified: false
  };

  constructor(
    // public authService: AuthService,
    private db: AngularFirestore
  ) {
    this.usersRef = this.db.collection<User>('users');
  }
  
  setUser(user) {
    console.log(user);
    this.user.uid = user.uid;
    this.user.email = user.email;
    this.user.displayName = user.displayName;
    this.user.photoURL = user.photoURL;
    this.user.emailVerified = user.emailVerified;
    console.log(this.user);
    this.saveUser(this.user);
  }

  saveUser(user: User) {
    return this.usersRef.add(user);
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

  getUser() {
    // this.user = this.authService.getUser();
    return this.user;
  }
}
