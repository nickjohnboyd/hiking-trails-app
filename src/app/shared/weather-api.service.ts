import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  privateKey: string = '2f49791ded274e2d8798c76f17bd3f76';

  constructor(
    private http: HttpClient
  ) { }

  getWeather(long: number, lat: number): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${this.privateKey}`);
  }
}