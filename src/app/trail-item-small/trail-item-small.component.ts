import { Component, OnInit, Input } from '@angular/core';
import { Trail } from '../models/trail';

@Component({
  selector: 'app-trail-item-small',
  templateUrl: './trail-item-small.component.html',
  styleUrls: ['./trail-item-small.component.scss']
})
export class TrailItemSmallComponent implements OnInit {
  @Input() trail: Trail;
  defaultTrail: string = '../../assets/images/default-trail.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
