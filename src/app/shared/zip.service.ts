import { Observable } from 'rxjs';
import { MapApiService } from "./map-api.service";
import { TrailsApiService } from "./trails-api.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ZipService {
  longitude: number;
  latitude: number;
  validZip: number;
  curZip: any;

  constructor(
    private trailsApiService: TrailsApiService,
    private mapApiService: MapApiService
  ) {}

  getZip(): Observable<number> {
    return this.curZip;
  }

  saveZip(zip: number) {
    this.curZip = zip;
  }

  zipValidator(zip: number) {
  //   this.mapApiService.getCoordinates(zip).subscribe((result) => {
  //     this.longitude = result.results[0].locations[0].latLng.lng;
  //     this.latitude = result.results[0].locations[0].latLng.lat;
  //     this.trailsApiService
  //       .getTrails(this.latitude, this.longitude)
  //       .subscribe((data) => {
  //         if (data.trails.length === 0) {
  //           this.validZip = false;
  //         } else {
  //           this.validZip = true;
  //         }
  //       });
  //   });
  //   return this.validZip;
  }
}
