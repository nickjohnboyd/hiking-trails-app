import { Component, OnInit, Input } from '@angular/core';
import { DailyWeather } from 'src/app/models/dailyWeather';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {
  @Input() dailyWeather: DailyWeather[];

  dailyDay: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getDay();
  }
  

  getDay() {
    for (let i = 0; i <= 7; i++) {
      let unixDay = this.setUnixDay(this.dailyWeather[i].dt);
      this.dailyDay.push(unixDay);
    }
  }

  setUnixDay(timestamp: number) {
    let day = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let today = days[day.getDay()];
    return today;
  }

}
