import { Trail } from './../models/trail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trail-list',
  templateUrl: './trail-list.component.html',
  styleUrls: ['./trail-list.component.scss']
})
export class TrailListComponent implements OnInit {
  @Input() trails: Trail[];

  constructor() { }

  ngOnInit(): void {
  }

}
