import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hasProfileImg = false;
  photoURL: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const user = this.userService.getUser();
    if(user) this.photoURL = user.photoURL;
    if(this.photoURL) this.hasProfileImg = true;
  }

}
