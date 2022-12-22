import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import {
  defaultQuantityOptions,
  QuantityOption,
} from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product: Product;
  @Output() updateCartProduct: EventEmitter<{
    productId: string;
    quantity: number;
  }> = new EventEmitter();
  @Output() removeCartProduct: EventEmitter<Product> = new EventEmitter();
  quantity: number;
  quantityOptions: QuantityOption[];

  constructor() {
    this.product = new Product({
      name: '',
      description: '',
      price: 0,
      url: '',
    });
    this.quantity = 1;
    this.quantityOptions = defaultQuantityOptions;
  }

  ngOnInit(): void {
    this.quantity = this.product.quantity ?? 1;
  }

  updateProduct() {
    console.log('updateProduct');
    this.updateCartProduct.emit({
      productId: this.product.id,
      quantity: this.quantity,
    });
  }

  removeProduct() {
    this.removeCartProduct.emit(this.product);
  }
}
