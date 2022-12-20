import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductProps } from '../models/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = new Product({
      name: '',
      description: '',
      price: 0,
      url: '',
      quantity: 1,
    });
  }

  ngOnInit(): void {}

  public updateQuantity(quantity: number) {
    this.product.updateQuantity(quantity);
  }
}
