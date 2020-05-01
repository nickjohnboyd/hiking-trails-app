import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trail-information',
  templateUrl: './trail-information.component.html',
  styleUrls: ['./trail-information.component.scss']
})
export class TrailInformationComponent implements OnInit {
  @Input() currentTrail;
  @Input() mapImg: string;

  defaultTrail: string = "../../assets/images/default-trail.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
