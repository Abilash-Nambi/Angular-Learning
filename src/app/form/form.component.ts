import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public userModel = new User('Ajmal', 'abilashn2704@gmail.com', 9895908764);
}
