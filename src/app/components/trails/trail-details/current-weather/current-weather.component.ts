import { Component, OnInit, Input } from '@angular/core';
import { DailyWeather } from 'src/app/models/dailyWeather';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: DailyWeather;
  @Input() currentTrail: Trail;

  windDirection: string;
  currentWeatherIcon: string;
  sunRise: string;
  sunSet: string;

  constructor() { }

  ngOnInit(): void {
    this.getUnixTime();
    this.getDirection(this.currentWeather.wind_deg);
    this.currentWeatherIcon = `https://openweathermap.org/img/wn/${this.currentWeather.weather[0].icon}@2x.png`;
  }

  getUnixTime() {
    let time1 = new Date(this.currentWeather.sunrise * 1000);
    let time2 = new Date(this.currentWeather.sunset * 1000);
    this.sunRise = this.setUnixTime(time1);
    this.sunSet = this.setUnixTime(time2);
  }

  setUnixTime(timestamp: any) {
    let hours = timestamp.getHours();
    let minutes = "0" + timestamp.getMinutes();
    return `${hours}:${minutes.substr(-2)}`;
  }

  getDirection(num: number) {
    let val = Math.floor((num / 22.5) + 0.5) % 16;
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return this.windDirection = arr[val];
  }
}
