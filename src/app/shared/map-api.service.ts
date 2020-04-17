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

//   getMap(): Observable<any> {
//     //return this.http.get<any>(`https://open.mapquestapi.com/staticmap/v5/map?key=sSGh5VATzYQjegPbtOePtsi61AGt7nEQ&center=${long}, ${lat}&size=400,300@2x&zoom=18&type=hyb`)
//     return this.http.get<any>(`https://open.mapquestapi.com/staticmap/v5/map?key=sSGh5VATzYQjegPbtOePtsi61AGt7nEQ&center=40.2448,-111.6271&size=600,400@2x&zoom=18&type=hyb`)
//   }
}

//long: number, lat: number
