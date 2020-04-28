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

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  addToFavorites(trail) {
    this.userService.addToFavorites(trail);
    console.log(this.userService.getUser());
  }

}
