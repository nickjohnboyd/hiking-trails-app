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
  validZip: any;
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
}
