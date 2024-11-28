import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, SingleProductComponent, FilterComponent],
  imports: [CommonModule, ProductListingRoutingModule, FormsModule],
})
export class ProductListingModule {}
