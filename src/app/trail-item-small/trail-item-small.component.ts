import { Component, OnInit, Input } from '@angular/core';
import { Trail } from '../models/trail';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-trail-item-small',
  templateUrl: './trail-item-small.component.html',
  styleUrls: ['./trail-item-small.component.scss']
})
export class TrailItemSmallComponent implements OnInit {
  @Input() trail: Trail;
  defaultTrail: string = '../../assets/images/default-trail.jpg';

  favorited = false;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  handleFavorites(trail: Trail) {
    this.favorited = !this.favorited; 
    this.userService.handleFavorites(trail, this.favorited);
  }

}
