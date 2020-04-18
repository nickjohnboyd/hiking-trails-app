import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  apiKey: string = 'sSGh5VATzYQjegPbtOePtsi61AGt7nEQ';

  constructor(
    private http: HttpClient
  ) { }

  getCoordinates(zip: number): Observable<any> {
    return this.http.get<any>(`https://open.mapquestapi.com/geocoding/v1/address?key=${this.apiKey}&postalCode=${zip}`);
  }
}
