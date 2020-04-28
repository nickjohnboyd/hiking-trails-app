import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(
    public authService: AuthService
  ) { }

  addToFavorites(trail) {
    this.user = this.authService.getUser();
    console.log(this.user);
    if(this.user.favorites === undefined) this.user.favorites = [];
    this.user.favorites.push(trail);
  }

  addToCompleted(trail) {
    this.user = this.authService.getUser();
    console.log(this.user);
    if(this.user.completed === undefined) this.user.completed = [];
    this.user.completed.push(trail);
  }

  getUser() {
    return this.user;
  }
}
