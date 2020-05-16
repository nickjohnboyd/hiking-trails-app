import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Trail } from 'src/app/models/trail';
import { Weather } from 'src/app/models/weather';
import { DailyWeather } from 'src/app/models/dailyWeather';
import { TrailsApiService } from 'src/app/shared/trails-api.service';
import { WeatherApiService } from 'src/app/shared/weather-api.service';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'firebase';

@Component({
  selector: "app-trail-details",
  templateUrl: "./trail-details.component.html",
  styleUrls: ["./trail-details.component.scss"],
})
export class TrailDetailsComponent implements OnInit {
  favorited: boolean;
  completed: boolean;
  mapImg: string;
  id: number;
  longitude: number;
  latitude: number;
  currentTrail: Trail;
  currentWeather: Weather;
  dailyWeather: DailyWeather[];
  loading: boolean = true;
  backToTrails: boolean = true;
  user

  constructor(
    private activateRoute: ActivatedRoute,
    private trailsApiService: TrailsApiService,
    private weatherApiService: WeatherApiService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.updateCurrentUser();
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
    setTimeout(() => {
      this.getUserData();
    }, 2000);
  }

  getCurrentWeather() {
    this.weatherApiService
      .getWeather(this.longitude, this.latitude)
      .subscribe((data) => {
        this.currentWeather = data.current;
        this.dailyWeather = data.daily;
      });
  }

  addFavorite(favorited: boolean) {
    this.favorited = favorited;
    this.userService.handleFavorites(this.currentTrail, favorited);
  }

  addCompleted(completed: boolean) {
    this.completed = completed;
    this.userService.handleCompleted(this.currentTrail, completed);
  }

  getUserData() {
    const user = this.userService.getCurrentUser();
    console.log('getting user data');
    console.log(user);
    const userFound = user.completed.find(item => item.id === this.currentTrail.id);
    console.log(userFound);
    if(userFound) this.completed = true;
  }
}
