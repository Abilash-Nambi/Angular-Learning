import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CustomFormComponent],
  imports: [
    CommonModule,
    CustomModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CustomModuleModule {}
