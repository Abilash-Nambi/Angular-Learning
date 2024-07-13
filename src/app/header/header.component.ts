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
    { title: 'Logo', path: '' },
    { title: 'Binding', path: 'binding' },
    { title: 'Two Way Binding', path: 'two-way-binding' },
    { title: 'Users', path: 'users' },
  ];
}
