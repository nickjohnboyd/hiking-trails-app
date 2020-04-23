import { Trail } from './../models/trail';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MapApiService } from '../shared/map-api.service';
import { TrailsApiService } from '../shared/trails-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trail-list',
  templateUrl: './trail-list.component.html',
  styleUrls: ['./trail-list.component.scss']
})
export class TrailListComponent implements OnInit {
  @Output() onTrailsAdded: EventEmitter<any> = new EventEmitter<any>();

  trails: Trail[] = [];
  zip: number;
  longitude: number;
  latitude: number;
  city: string;
  state: string;

  constructor(
    private mapApiService: MapApiService,
    private trailsApiService: TrailsApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('first emitter');
    console.log(this.trails);
    this.onTrailsAdded.emit(this.trails);
    this.zip = this.activatedRoute.snapshot.params.zip;
    this.searchTrails();
  }

  searchTrails() {
    if(this.zip === undefined) return;
    this.mapApiService.getCoordinates(this.zip).subscribe(result => {
      console.log('result');
      console.log(result);
      this.city = result.results[0].locations[0].adminArea5;
      this.state = result.results[0].locations[0].adminArea3;
      this.longitude = result.results[0].locations[0].latLng.lng;
      this.latitude = result.results[0].locations[0].latLng.lat;
      this.searchTrailsApi();
    });
  }

  searchTrailsApi() {
    this.trailsApiService.getTrails(this.latitude, this.longitude).subscribe(data => {
      console.log('data');
      console.log(data);
      this.trails = data.trails;
      console.log('second emitter');
      console.log(this.trails);
      this.onTrailsAdded.emit(this.trails);
      console.log('after emitter');
    });   
  }

}
