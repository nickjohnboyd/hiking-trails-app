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

  constructor() { }

  ngOnInit(): void {
  }

}
