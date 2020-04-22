import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trail-search',
  templateUrl: './trail-search.component.html',
  styleUrls: ['./trail-search.component.scss']
})
export class TrailSearchComponent implements OnInit {
  
  zip: number;
  displaySmall = false;
  click = 0;

  constructor() { }

  ngOnInit(): void {
  }

  shrinkDisplay() {
    // this.click++;
    // this.displaySmall = true;
    // console.log(this.displaySmall);
    // if(this.click === 1) this.shrinkDisplay();
  }

}
