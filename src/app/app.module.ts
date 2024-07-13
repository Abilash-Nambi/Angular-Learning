import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, BindingComponent, HeaderComponent, TwoWayBindingComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
