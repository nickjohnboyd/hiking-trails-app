import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Trail } from 'src/app/models/trail';
import { Weather } from 'src/app/models/weather';
import { DailyWeather } from 'src/app/models/dailyWeather';
import { TrailsApiService } from 'src/app/shared/trails-api.service';
import { WeatherApiService } from 'src/app/shared/weather-api.service';

@Component({
  selector: "app-trail-details",
  templateUrl: "./trail-details.component.html",
  styleUrls: ["./trail-details.component.scss"],
})
export class TrailDetailsComponent implements OnInit {
  favorite: boolean;
  complete: boolean;
  mapImg: string;
  id: number;
  longitude: number;
  latitude: number;
  currentTrail: Trail;
  currentWeather: Weather;
  dailyWeather: DailyWeather[];
  loading: boolean = true;
  backToTrails: boolean = true;

  constructor(
    private activateRoute: ActivatedRoute,
    private trailsApiService: TrailsApiService,
    private weatherApiService: WeatherApiService,
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"];
    this.trailsApiService.getTrailById(this.id).subscribe((data) => {
      this.currentTrail = data.trails[0];
      console.log(this.currentTrail);
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
        this.dailyWeather = data.daily;
      });
  }

  addFavorite(favorite: boolean) {
    this.favorite = favorite;
  }

  addCompleted(complete: boolean) {
    this.complete = complete;
  }
}
