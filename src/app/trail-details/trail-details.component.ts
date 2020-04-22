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
  defaultTrail: string = '../../assets/images/default-trail.jpg'
  mapImg: string;
  id: number;
  longitude: number;
  latitude: number;
  currentTrail: Trail;
  currentWeather: Weather;
  currentWeatherIcon: string;
  windDirection: string;
  campgrounds;
  hourlyWeather;
  dailyWeather;
  sunRise;
  sunSet;

  constructor(
    private activateRoute:  ActivatedRoute,
    private trailsApiService: TrailsApiService,
    private weatherApiService: WeatherApiService,
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.trailsApiService.getTrailById(this.id).subscribe(data => {
      this.currentTrail = data.trails[0];
      this.longitude = this.currentTrail.longitude;
      this.latitude = this.currentTrail.latitude;
      this.mapImg = `https://open.mapquestapi.com/staticmap/v5/map?locations=${this.latitude},${this.longitude}&size=600,400@2x&key=sSGh5VATzYQjegPbtOePtsi61AGt7nEQ`;
      console.log(data);
      this.getCurrentWeather();
    });
  }

  getCurrentWeather() {
    this.weatherApiService.getWeather(this.longitude, this.latitude).subscribe(data => {
      this.currentWeather = data.current;
      this.hourlyWeather = data.hourly;
      this.dailyWeather = data.daily;
      this.currentWeatherIcon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
      console.log(this.currentWeather, this.hourlyWeather, this.dailyWeather);
      this.getDirection(this.currentWeather.wind_deg);
      this.getSunriseSunset();
      this.getCampgroundsNearby();
    })
  }

  getCampgroundsNearby() {
    this.trailsApiService.getCampgrounds(this.longitude, this.latitude).subscribe(data => {
      this.campgrounds = data.campgrounds;
      console.log(this.campgrounds + 'campgrounds')
    })
  }

  getDirection(num: number) {
    let val = Math.floor((num / 22.5) + 0.5);
    let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return this.windDirection = arr[(val % 16)];
  }

  getSunriseSunset() {
    let date1 = new Date(this.currentWeather.sunrise * 1000);
    let date2 = new Date(this.currentWeather.sunset * 1000);
    this.sunRise = this.setSunriseSunset(date1);
    this.sunSet = this.setSunriseSunset(date2);
  }

  setSunriseSunset(date) {
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
}
