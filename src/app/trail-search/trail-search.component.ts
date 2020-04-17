import { Trail } from './../models/trail';
import { MapApiService } from './../shared/map-api.service';
import { Component, OnInit } from '@angular/core';
import { TrailsApiService } from '../shared/trails-api.service';

@Component({
  selector: 'app-trail-search',
  templateUrl: './trail-search.component.html',
  styleUrls: ['./trail-search.component.scss']
})
export class TrailSearchComponent implements OnInit {

  trails: any;
  zip: number;
  longitude: number;
  latitude: number;

  constructor(
    private trailsApiService: TrailsApiService,
    private mapApiService: MapApiService
  ) { }

  ngOnInit(): void {}

  searchTrails() {
    this.mapApiService.getCoordinates(this.zip).subscribe(result => {
      this.longitude = result.results[0].locations[0].latLng.lng;
      this.latitude = result.results[0].locations[0].latLng.lat;
      this.searchTrailsApi();
    });
  }

  searchTrailsApi() {
    this.trailsApiService.getTrails(this.latitude, this.longitude).subscribe(data => {
      this.trails = data.trails;
    });
  }
}
