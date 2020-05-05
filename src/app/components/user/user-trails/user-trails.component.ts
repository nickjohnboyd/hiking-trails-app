import { Component, OnInit } from "@angular/core";
import { Trail } from "src/app/models/trail";

@Component({
  selector: "app-user-trails",
  templateUrl: "./user-trails.component.html",
  styleUrls: ["./user-trails.component.scss"],
})
export class UserTrailsComponent implements OnInit {
  popularTrails: Trail[] = [];
  completedTrails: Trail[] = [];
  logout: boolean = true;
  testTrail1: Trail = {
    ascent: 41,
    conditionDate: "1970-01-01 00:00:00",
    conditionDetails: null,
    conditionStatus: "Unknown",
    descent: -42,
    difficulty: "green",
    high: 5289,
    id: 7018092,
    imgMedium: "https://cdn-files.apstatic.com/hike/7017883_medium_1554829956.jpg",
    imgSmall: "https://cdn-files.apstatic.com/hike/7017883_small_1554829956.jpg",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7017883_smallMed_1554829956.jpg",
    imgSqSmall: "https://cdn-files.apstatic.com/hike/7017883_sqsmall_1554829956.jpg",
    latitude: 39.7503,
    length: 2.6,
    location: "Denver, Colorado",
    longitude: -104.9489,
    low: 5254,
    name: "Denver Zoo",
    starVotes: 2,
    stars: 4.5,
    summary: "A stroll through the Denver Zoo. Admission fees charged to access this trail",
    type: "Hike",
    url: "https://www.hikingproject.com/trail/7018092/denver-zoo",
  };
  testTrail2: Trail = {
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
  testTrail3: Trail = {
    ascent: 449,
    conditionDate: "2020-04-26 16:51:38",
    conditionDetails: "Dry",
    conditionStatus: "All Clear",
    descent: -447,
    difficulty: "blue",
    high: 6281,
    id: 7005455,
    imgMedium: "https://cdn-files.apstatic.com/hike/7004483_medium_1554245122.jpg",
    imgSmall: "https://cdn-files.apstatic.com/hike/7004483_small_1554245122.jpg",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7004483_smallMed_1554245122.jpg",
    imgSqSmall: "https://cdn-files.apstatic.com/hike/7004483_sqsmall_1554245122.jpg",
    latitude: 39.7524,
    length: 1.8,
    location: "Golden, Colorado",
    longitude: -105.2104,
    low: 5833,
    name: "Golden Summit Trail",
    starVotes: 26,
    stars: 4,
    summary: "This is the classic trail to ascend the backside of Golden's signature rock formation, Castle Rock.",
    type: "Hike",
    url: "https://www.hikingproject.com/trail/7005455/golden-summit-trail",
  };
  testTrail4: Trail = {
    ascent: 269,
    conditionDate: "1970-01-01 00:00:00",
    conditionDetails: null,
    conditionStatus: "Unknown",
    descent: -269,
    difficulty: "green",
    high: 5386,
    id: 7009519,
    imgMedium: "https://cdn-files.apstatic.com/hike/7029382_medium_1554924405.jpg",
    imgSmall: "https://cdn-files.apstatic.com/hike/7029382_small_1554924405.jpg",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7029382_smallMed_1554924405.jpg",
    imgSqSmall: "https://cdn-files.apstatic.com/hike/7029382_sqsmall_1554924405.jpg",
    latitude: 39.7554,
    length: 9.1,
    location: "Aurora, Colorado",
    longitude: -104.8423,
    low: 5285,
    name: "Sand Creek Tour",
    starVotes: 3,
    stars: 4,
    summary: "Urban Canal/Greenbelt trail at it's finest!",
    type: "Hike",
    url: "https://www.hikingproject.com/trail/7009519/sand-creek-tour",
  }

  constructor() {}

  ngOnInit(): void {
    this.popularTrails.push(this.testTrail1);
    this.popularTrails.push(this.testTrail3);
    this.completedTrails.push(this.testTrail2);
    this.completedTrails.push(this.testTrail4);
  }
}
