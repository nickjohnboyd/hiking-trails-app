import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Trail } from 'src/app/models/trail';
import { Weather } from 'src/app/models/weather';
import { DailyWeather } from 'src/app/models/dailyWeather';
import { HourlyWeather } from 'src/app/models/hourlyWeather';
import { Campgrounds } from 'src/app/models/campgrounds';
import { TrailsApiService } from 'src/app/shared/trails-api.service';
import { WeatherApiService } from 'src/app/shared/weather-api.service';

@Component({
  selector: "app-trail-details",
  templateUrl: "./trail-details.component.html",
  styleUrls: ["./trail-details.component.scss"],
})
export class TrailDetailsComponent implements OnInit {
  defaultTrail: string = "../../assets/images/default-trail.jpg";
  mapImg: string;
  id: number;
  longitude: number;
  latitude: number;
  currentTrail: Trail;
  currentWeather: Weather;
  currentWeatherIcon: string;
  windDirection: string;
  sunRise: string;
  sunSet: string;
  dailyWeather: DailyWeather[];
  hourlyWeather: HourlyWeather[];
  campgrounds: Campgrounds[];
  hourlyTime: string[] = [];
  dailyDay: string[] = [];
  loading: boolean = true;
  commentCollection: string[] = [];
  comment: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private trailsApiService: TrailsApiService,
    private weatherApiService: WeatherApiService,
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"];
    this.trailsApiService.getTrailById(this.id).subscribe((data) => {
      this.currentTrail = data.trails[0];
      this.longitude = this.currentTrail.longitude;
      this.latitude = this.currentTrail.latitude;
      this.mapImg = `https://open.mapquestapi.com/staticmap/v5/map?locations=${this.latitude},${this.longitude}&size=380,260@2x&key=sSGh5VATzYQjegPbtOePtsi61AGt7nEQ`;
      this.getCurrentWeather();
      setTimeout(() => {
        this.loading = false;
      }, 500)
    });
  }

  getCurrentWeather() {
    this.weatherApiService
      .getWeather(this.longitude, this.latitude)
      .subscribe((data) => {
        this.currentWeather = data.current;
        this.hourlyWeather = data.hourly;
        this.dailyWeather = data.daily;
        this.currentWeatherIcon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
        this.getDirection(this.currentWeather.wind_deg);
        this.getUnixTime(null);
        this.getCampgroundsNearby();
        this.getHour();
        this.getDay();
        // console.log(this.currentTrail)
        // console.log(this.currentWeather, this.dailyWeather, this.hourlyWeather)
      });
  }

  post() {
    if (this.comment != undefined)  {
      this.commentCollection.push(this.comment);
      this.comment = '';
    }
  }

  getHour() {
    for (let i = 0; i < 10; i++) {
      this.getUnixTime(this.hourlyWeather[i].dt);
    }
  }

  getDay() {
    for (let i = 0; i <= 7; i++) {
      let unixDay = this.setUnixDay(this.dailyWeather[i].dt);
      this.dailyDay.push(unixDay);
    }
  }

  getCampgroundsNearby() {
    this.trailsApiService
      .getCampgrounds(this.longitude, this.latitude)
      .subscribe((data) => {
        this.campgrounds = data.campgrounds;
        // console.log(this.campgrounds)
      });
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

  getUnixTime(timestamp: number) {
    let hourlyTime = new Date(timestamp * 1000);
    let time1 = new Date(this.currentWeather.sunrise * 1000);
    let time2 = new Date(this.currentWeather.sunset * 1000);
    this.sunRise = this.setUnixTime(time1);
    this.sunSet = this.setUnixTime(time2);
    let hourlyNewT = this.setUnixTime(hourlyTime);
    if (hourlyNewT !== "NaN:aN:aN") {
      this.hourlyTime.push(hourlyNewT);
    }
  }

  setUnixTime(timestamp: any) {
    let hours = timestamp.getHours();
    let minutes = "0" + timestamp.getMinutes();
    return `${hours}:${minutes.substr(-2)}`;
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
