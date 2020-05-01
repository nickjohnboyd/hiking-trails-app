import { Component, OnInit } from '@angular/core';
import { Trail } from 'src/app/models/trail';


@Component({
  selector: 'app-user-trails',
  templateUrl: './user-trails.component.html',
  styleUrls: ['./user-trails.component.scss']
})
export class UserTrailsComponent implements OnInit {
  popularTrails: Trail[] = [];
  testTrail: Trail = {
    ascent: 369,
    conditionDate: "2020-02-17 20:17:36",
    conditionDetails: "Mostly Dry - From Cherry Creek Trail to Lowry I'm pretty good shape.  Very minimal ice.",
    conditionStatus: "Minor Issues",
    descent: -468,
    difficulty: "green",
    high: 5549,
    id: 7008385,
    imgMedium: "https://cdn-files.apstatic.com/hike/7007020_medium_1554321989.jpg",
    imgSmall: "https://cdn-files.apstatic.com/hike/7007020_small_1554321989.jpg",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7007020_smallMed_1554321989.jpg",
    imgSqSmall: "https://cdn-files.apstatic.com/hike/7007020_sqsmall_1554321989.jpg",
    latitude: 39.487,
    length: 61.3,
    location: "Roxborough Park, Colorado",
    longitude: -105.0908,
    low: 5435,
    name: "Highline Canal Trail",
    starVotes: 13,
    stars: 4.5,
    summary: "Widely recognized as one of the best urban trails in the country.",
    type: "Hike",
    url: "https://www.hikingproject.com/trail/7008385/highline-canal-trail"
  };

  constructor() { }

  ngOnInit(): void {
    this.popularTrails.push(this.testTrail);
    this.popularTrails.push(this.testTrail);
    this.popularTrails.push(this.testTrail);
    this.popularTrails.push(this.testTrail);
  }

}
