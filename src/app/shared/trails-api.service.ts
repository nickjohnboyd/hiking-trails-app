import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trail } from '../models/trail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrailsApiService {
  privateKey: string = '200728213-3f47cedb3057b6b512959c8c75078197';

  constructor(
    private http: HttpClient
  ) { }

  getTrails(long, lat): Observable<Trail[]> {
    return this.http.get<Trail[]>(`https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${this.privateKey}`);
  }
}
