import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    ProductsComponent,
    SingleProductComponent,
    FilterComponent,
    SingleProductViewComponent,
  ],
  imports: [
    CommonModule,
    ProductListingRoutingModule,
    FormsModule,
    MatDialogModule,
  ],
})
export class ProductListingModule {}
