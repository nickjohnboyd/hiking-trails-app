import { Component, OnInit } from "@angular/core";
import { Trail } from "src/app/models/trail";
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-user-trails",
  templateUrl: "./user-trails.component.html",
  styleUrls: ["./user-trails.component.scss"],
})
export class UserTrailsComponent implements OnInit {
  favoriteTrails: Trail[];
  completedTrails: Trail[];
  logout: boolean = true;
  user: User;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.favoriteTrails = this.user.favorites;
    this.completedTrails = this.user.completed;
  }
}
