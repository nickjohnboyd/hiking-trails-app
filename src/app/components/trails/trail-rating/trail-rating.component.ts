import { Component, OnInit, Input } from '@angular/core';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-trail-rating',
  templateUrl: './trail-rating.component.html',
  styleUrls: ['./trail-rating.component.scss']
})
export class TrailRatingComponent implements OnInit {
  @Input() trail: Trail;

  constructor() { }

  ngOnInit(): void {
  }

}
