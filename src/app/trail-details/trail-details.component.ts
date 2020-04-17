import { Weather } from './../models/weather';
import { WeatherApiService } from './../shared/weather-api.service';
import { Trail } from './../models/trail';
import { TrailsApiService } from './../shared/trails-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trail-details',
  templateUrl: './trail-details.component.html',
  styleUrls: ['./trail-details.component.scss']
})
export class TrailDetailsComponent implements OnInit {
  id: number;
  longitude: number;
  latitude: number;
  currentTrail: Trail;
  currentWeather: Weather;

  constructor(
    private activateRoute:  ActivatedRoute,
    private trailsApiService: TrailsApiService,
    private weatherApiService: WeatherApiService
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.trailsApiService.getTrailById(this.id).subscribe(data => {
      this.currentTrail = data.trails[0];
      this.longitude = this.currentTrail.longitude;
      this.latitude = this.currentTrail.latitude;
      console.log(this.currentTrail);
    });
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherApiService.getWeather(this.longitude, this.latitude).subscribe(data => {
      this.currentWeather = data.current
      console.log(this.currentWeather);
    })
  }

}
