import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth,
    private userService: UserService
  ) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
      if(this.user === null) return;
      this.userService.setUser(this.user);
    });
  }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((res) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      }).catch((error) => {
        window.alert(error);
      })
  }

  // Firebase Google Sign-in
  SigninWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        console.log('Successfully logged in!');
        console.log(this.user);
      }).catch(error => {
        console.log(error);
      });
  }

  // Firebase Logout 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  // getUser() {
  //   return this.user;
  // }

}
