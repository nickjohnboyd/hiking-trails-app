import { Component, OnInit, Input } from '@angular/core';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-trail-information',
  templateUrl: './trail-information.component.html',
  styleUrls: ['./trail-information.component.scss']
})
export class TrailInformationComponent implements OnInit {
  @Input() currentTrail: Trail;
  @Input() mapImg: string;
  @Input() favorite: boolean;
  @Input() complete: boolean;

  defaultTrail: string = "../../assets/images/default-trail.jpg";

  constructor() { }

  ngOnInit(): void {

  }

}
