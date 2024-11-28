import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  constructor() {}
  @Input() product: Product;

  ngOnInit(): void {}
}
