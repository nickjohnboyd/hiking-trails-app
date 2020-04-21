import { Trail } from './../models/trail';
import { MapApiService } from './../shared/map-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trail-search',
  templateUrl: './trail-search.component.html',
  styleUrls: ['./trail-search.component.scss']
})
export class TrailSearchComponent implements OnInit {
  
  zip: number;

  constructor() { }

  ngOnInit(): void {}

}
