import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();
  zip: number;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.onSearch.emit(this.zip);
  }

}
