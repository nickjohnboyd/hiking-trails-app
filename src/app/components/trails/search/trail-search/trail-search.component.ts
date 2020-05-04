import { ZipService } from './../../../../shared/zip.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trail-search',
  templateUrl: './trail-search.component.html',
  styleUrls: ['./trail-search.component.scss']
})
export class TrailSearchComponent implements OnInit {
  zip: number;

  constructor(
    private zipService: ZipService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  search() {
    // this.validZip = this.zipService.zipValidator(this.zip);
    this.router.navigate([`trails/${this.zip}`]);
    
  }

}
