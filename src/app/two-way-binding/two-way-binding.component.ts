import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public firstname: string = '';
  public hidden = false;
}
