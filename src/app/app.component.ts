import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular learning';
  currentYear = new Date().getFullYear();
  public name = 'My name';

  greetUser = () => 'Good morning' + this.name;
}
