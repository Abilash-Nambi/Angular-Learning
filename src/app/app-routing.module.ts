import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsListComponent } from './users-details-list/users-details-list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, //default route
  { path: 'binding', component: BindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersDetailsListComponent },
  { path: 'forms', component: FormComponent },
  { path: 'reactiveforms', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
