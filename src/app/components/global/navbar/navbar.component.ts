import { AuthService } from 'src/app/shared/auth.service';
import { ZipService } from "./../../../shared/zip.service";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { Router } from "@angular/router";
import { User } from 'src/app/models/user';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() back: boolean;
  @Input() logout: boolean;
  hasProfileImg = false;
  photoURL: string;
  curZip: any;
  user: User;
  users: User[];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private zipService: ZipService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    if (this.user) this.photoURL = this.user.photoURL;
    if (this.photoURL) this.hasProfileImg = true;
  }

  logoutUser() {
    // this.userService.deleteUser(this.user);
  }

  backToTrails() {
    this.curZip = this.zipService.getZip();
    this.router.navigate([`trails/${this.curZip}`]);
  }
}

//history.back();
