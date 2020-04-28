import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { Trail } from '../models/trail';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(
    public authService: AuthService
  ) { }

  handleFavorites(trail: Trail, favorited: boolean) {
    this.user = this.authService.getUser();
    if(favorited) {
      console.log(this.user);
      if(this.user.favorites === undefined) this.user.favorites = [];
      this.user.favorites.push(trail);
    }
    else if(!favorited) {
      // this.user.favorites.find(item => item === trail);
    }
  }

  addToCompleted(trail: Trail) {
    this.user = this.authService.getUser();
    console.log(this.user);
    if(this.user.completed === undefined) this.user.completed = [];
    this.user.completed.push(trail);
  }

  getUser() {
    return this.user;
  }
}
