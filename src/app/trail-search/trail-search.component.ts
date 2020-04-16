import { MapApiService } from './../shared/map-api.service';
import { Component, OnInit } from '@angular/core';
import { TrailsApiService } from '../shared/trails-api.service';
import { Trail } from '../models/trail';
import { WeatherApiService } from '../shared/weather-api.service';

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
    private mapApiService: MapApiService,
    private weatherApiService: WeatherApiService
  ) { }

  ngOnInit(): void {
    this.weatherApiService.getWeather().subscribe(result => {
      console.log(result);
    })
  }

  searchTrails() {
    console.log(this.zip);
    this.mapApiService.getCoordinates(this.zip).subscribe(result => {
      this.longitude = result.results[0].locations[0].latLng.lng;
      this.latitude = result.results[0].locations[0].latLng.lat;
      console.log(this.longitude, this.latitude);
      this.searchTrailsApi();
    });
  }
  searchTrailsApi() {
    this.trailsApiService.getTrails(this.latitude, this.longitude).subscribe(data => {
      this.trails = data;
      console.log(this.trails);
    });
  }
}
