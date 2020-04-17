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

  getTrails(lat, long): Observable<any> {
    return this.http.get<any>(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=${this.privateKey}`);
  }

  getTrailById(id): Observable<any> {
    return this.http.get<any>(`https://www.hikingproject.com/data/get-trails-by-id?ids=${id}&key=${this.privateKey}`)
  }
}
