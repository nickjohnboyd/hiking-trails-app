import { MapApiService } from './../shared/map-api.service';
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
    private trailsApiService: TrailsApiService,
    private mapApiService: MapApiService
  ) { }

  ngOnInit(): void {
    
  }

  searchTrails() {
    console.log(this.zip);
    this.mapApiService.getCoordinates(this.zip).subscribe(result => {
      this.longitude = result.results[0].locations[0].latLng.lng;
      this.latitude = result.results[0].locations[0].latLng.lat;
      console.log(this.longitude, this.latitude);
    })
    // Call MapQuest Api then pass in long and lat
    this.trailsApiService.getTrails(this.latitude, this.longitude).subscribe(result => {
      this.trails = result;
      console.log(this.trails);
    });
  }
}
