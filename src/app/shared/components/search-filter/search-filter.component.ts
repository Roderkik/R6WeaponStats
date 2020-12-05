import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Output() filterEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onFilterKeyUp($event: KeyboardEvent): void {
    this.filterEvent.emit(($event.target as HTMLInputElement).value);
  }
}
