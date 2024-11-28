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
    { title: 'Advanced ', path: '' },
    { title: 'Binding', path: '/binding' },
    { title: 'Two Way Binding', path: '/two-way-binding' },
    { title: 'Users', path: '/users' },
    { title: 'Forms', path: '/forms' },
    { title: 'Reactive-Forms', path: '/reactiveforms' },
    { title: 'Custom Form', path: '/custom-form/myForm' },
  ];
}
