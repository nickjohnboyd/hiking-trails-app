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
    this.user = this.authService.getUser();
    console.log(this.user);
    if(this.user.completed === undefined) this.user.completed = [];
    this.user.completed.push(trail);
  }

  getUser() {
    this.user = this.authService.getUser();
    return this.user;
  }
}
