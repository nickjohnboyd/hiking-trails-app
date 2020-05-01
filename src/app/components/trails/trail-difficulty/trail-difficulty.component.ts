import { Component, OnInit, Input } from '@angular/core';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-trail-difficulty',
  templateUrl: './trail-difficulty.component.html',
  styleUrls: ['./trail-difficulty.component.scss']
})
export class TrailDifficultyComponent implements OnInit {
  @Input() trail: Trail;

  constructor() { }

  ngOnInit(): void {}

}
