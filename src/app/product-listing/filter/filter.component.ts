import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterValue: String = 'true';
  @Input()
  totalStock: number = 0;
  @Input()
  outOfStock: number = 0;

  @Output()
  changedFilteredValue = new EventEmitter<String>(); //initialized an new event emitter to listen the event happening

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.changedFilteredValue.emit(this.filterValue);
  }
}
