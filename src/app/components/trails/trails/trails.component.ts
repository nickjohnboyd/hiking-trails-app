import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit {
  showTrailList = false;

  constructor() { }

  ngOnInit(): void {
  }

  setDisplay(trails) {
    console.log('set display trails');
    console.log(trails);
    if(trails.length > 0) this.showTrailList = true;
    else this.showTrailList = false;
  }

}
