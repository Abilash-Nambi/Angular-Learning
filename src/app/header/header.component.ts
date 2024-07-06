import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public title = [
    { title: 'Binding', path: 'home' },
    { title: 'Two Way Binding', path: 'two-way-binding' },
  ];
}
