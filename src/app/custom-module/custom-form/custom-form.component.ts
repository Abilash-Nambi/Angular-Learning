import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  Form: FormGroup;
  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      name: ['', Validators.required], // Form control with validation
      email: ['', [Validators.required, Validators.email]], // Email validation
      message: [''], // Optional form control
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
