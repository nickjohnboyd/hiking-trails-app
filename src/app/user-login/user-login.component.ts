import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  user

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  login() {
    // let provider = new firebase.auth.GoogleAuthProvider();
    const provider = new firebase.auth.GoogleAuthProvider();
  
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      this.user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    console.log(this.user);
  }

}
