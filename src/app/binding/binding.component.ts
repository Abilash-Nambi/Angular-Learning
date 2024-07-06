import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /* Interpolation */
  title = 'Angular learning';
  currentYear = new Date().getFullYear();
  public name = 'My name';

  greetUser = (): string => 'Good morning' + this.name;
  /* Property binding */
  public myId = 'testId';
  public isDisabled = false;

  public inputData: String = ' ';

  onChange(event: any): void {
    this.inputData = event.target.value;
    console.log(this.inputData);
  }
  count: number = 0;

  increament(): void {
    this.count++;
  }
  decrement(): void {
    this.count > 0 && this.count--;
  }

  log(input: any): void {
    console.log('🚀 + AppComponent + log + input:', input.value);
  }
}
