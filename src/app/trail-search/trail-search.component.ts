import { Component, OnInit } from '@angular/core';
import { TrailsApiService } from '../shared/trails-api.service';
import { Trail } from '../models/trail';

@Component({
  selector: 'app-trail-search',
  templateUrl: './trail-search.component.html',
  styleUrls: ['./trail-search.component.scss']
})
export class TrailSearchComponent implements OnInit {

  trails: Trail[];
  zip: number;
  longitude: number;
  latitude: number;

  constructor(
    private trailsApiService: TrailsApiService
  ) { }

  ngOnInit(): void {
    
  }

  searchTrails() {
    console.log(this.zip);
    // Call MapQuest Api then pass in long and lat
    this.trailsApiService.getTrails(this.latitude, this.longitude).subscribe(result => {
      this.trails = result;
      console.log(this.trails);
    });
  }
}
