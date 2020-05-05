import { Component, OnInit } from '@angular/core';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-home-extras',
  templateUrl: './home-extras.component.html',
  styleUrls: ['./home-extras.component.scss']
})
export class HomeExtrasComponent implements OnInit {
  popularTrails: Trail[] = [];
  trailOne: Trail = {
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

  trailTwo: Trail = {
    ascent: 1591,
    conditionDate: "1970-01-01 00:00:00",
    conditionDetails: null,
    conditionStatus: "Unknown",
    descent: -59,
    difficulty: "black",
    high: 9778,
    id: 7085045,
    imgMedium: "",
    imgSmall: "",
    imgSmallMed: "",
    imgSqSmall: "",
    latitude: 36.3496,
    length: 1.7,
    location: "Pahrump, Nevada",
    longitude: -115.6816,
    low: 8226,
    name: "Mack's Peak",
    starVotes: 2,
    stars: 4.5,
    summary: "Steep and loose rocks. Some scree and rubble on the last approach to the peak.",
    type: "Trail",
    url: "https://www.hikingproject.com/trail/7085045/macks-peak",
  };

  trailThree: Trail = {
    ascent: 1179,
    conditionDate: "2020-04-23 13:40:58",
    conditionDetails: "Dry",
    conditionStatus: "All Clear",
    descent: -1179,
    difficulty: "blue",
    high: 7312,
    id: 7029252,
    imgMedium: "https://cdn-files.apstatic.com/hike/7004559_medium_1554245622.jpg",
    imgSmall: "https://cdn-files.apstatic.com/hike/7004559_small_1554245622.jpg",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7004559_smallMed_1554245622.jpg",
    imgSqSmall: "https://cdn-files.apstatic.com/hike/7004559_sqsmall_1554245622.jpg",
    latitude: 39.7162,
    length: 5.7,
    location: "West Pleasant View, Colorado",
    longitude: -105.2098,
    low: 6172,
    name: "Apex-Enchanted Lollipop",
    starVotes: 59,
    stars: 4.2,
    summary: "This is one of the best hikes on the Front Range.",
    type: "Hike",
    url: "https://www.hikingproject.com/trail/7029252/apex-enchanted-lollipop",
  };

  constructor() { }

  ngOnInit(): void {
    this.popularTrails.push(this.trailOne);
    this.popularTrails.push(this.trailTwo);
    this.popularTrails.push(this.trailThree);
  }

}
