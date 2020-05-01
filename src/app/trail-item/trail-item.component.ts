import { UserService } from './../shared/user.service';
import { Trail } from './../models/trail';
import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'app-trail-item',
  templateUrl: './trail-item.component.html',
  styleUrls: ['./trail-item.component.scss']
})
export class TrailItemComponent implements OnInit {
  @Input() trail: Trail;

  defaultTrail: string = '../../assets/images/default-trail.jpg';

  favorited = false;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit(): void {
  }

  handleFavorites(trail: Trail) {
    this.favorited = !this.favorited;
    this.userService.handleFavorites(trail, this.favorited);
  }
}
