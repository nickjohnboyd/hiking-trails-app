import { ZipService } from "./../../../shared/zip.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Trail } from "src/app/models/trail";
import { MapApiService } from "src/app/shared/map-api.service";
import { TrailsApiService } from "src/app/shared/trails-api.service";

@Component({
  selector: "app-trail-list",
  templateUrl: "./trail-list.component.html",
  styleUrls: ["./trail-list.component.scss"],
})
export class TrailListComponent implements OnInit {
  @Output() onTrailsAdded: EventEmitter<any> = new EventEmitter<any>();

  trails: Trail[] = [];
  zip: number;
  validZip: any = true;
  longitude: number;
  latitude: number;
  city: string;
  state: string;
  loading: boolean = true;

  constructor(
    private mapApiService: MapApiService,
    private trailsApiService: TrailsApiService,
    private zipService: ZipService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onTrailsAdded.emit(this.trails);
    this.zip = this.activatedRoute.snapshot.params.zip;
    this.searchTrails();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  searchTrails(zip?: number) {
    if (zip) this.zip = zip;
    console.log(this.zip);
    // this.validZip = this.zipService.zipValidator(this.zip);
    this.mapApiService.getCoordinates(this.zip).subscribe((result) => {
      this.city = result.results[0].locations[0].adminArea5;
      this.state = result.results[0].locations[0].adminArea3;
      this.longitude = result.results[0].locations[0].latLng.lng;
      this.latitude = result.results[0].locations[0].latLng.lat;
      this.searchTrailsApi();
      this.saveCurrentZip(this.zip);
    });
  }

  searchTrailsApi() {
    this.trailsApiService
      .getTrails(this.latitude, this.longitude)
      .subscribe((data) => {
          this.trails = data.trails;
          console.log(data)
          this.onTrailsAdded.emit(this.trails);
      });
  }

  saveCurrentZip(zip: number) {
    this.zipService.saveZip(zip);
  }
}
