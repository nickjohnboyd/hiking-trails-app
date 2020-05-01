import { Component, OnInit, Input } from '@angular/core'; 
import { Trail } from 'src/app/models/trail';
import { UserService } from 'src/app/shared/user.service';

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
