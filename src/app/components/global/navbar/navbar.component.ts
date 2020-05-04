import { ZipService } from "./../../../shared/zip.service";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { Router } from "@angular/router";

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

  constructor(
    private userService: UserService,
    private zipService: ZipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) this.photoURL = user.photoURL;
    if (this.photoURL) this.hasProfileImg = true;
  }

  backToTrails() {
    this.curZip = this.zipService.getZip();
    this.router.navigate([`trails/${this.curZip}`]);
  }
}

//history.back();
