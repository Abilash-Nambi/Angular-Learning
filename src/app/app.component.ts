import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* Interpolation */
  title = 'Angular learning';
  currentYear = new Date().getFullYear();
  public name = 'My name';

  greetUser = () => 'Good morning' + this.name;
  /* Property binding */
  public myId = 'testId';
  public isDisabled = false;

  public inputData: String = ' ';

  onChange(event: any): void {
    this.inputData = event.target.value;
    console.log(this.inputData);
  }
  count: number = 0;

  increament() {
    this.count++;
  }
  decrement() {
    this.count > 0 && this.count--;
  }
}
