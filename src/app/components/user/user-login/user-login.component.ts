import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login() {
    
  }

  googleLogin() {
    this.authService.SigninWithGoogle();
    this.userService.isLoggedIn(true);
  }

}
