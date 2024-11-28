import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomFormComponent } from './custom-form/custom-form.component';

const routes: Routes = [{ path: 'myForm', component: CustomFormComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomModuleRoutingModule {}
