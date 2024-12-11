import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model';
import { MatDialog } from '@angular/material/dialog';
import { SingleProductViewComponent } from '../single-product-view/single-product-view.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  @Input() product: Product;

  ngOnInit(): void {}
  open(): void {
    this.dialog.open(SingleProductViewComponent, {
      height: '700px',
      data: this.product,
    });
  }
}
