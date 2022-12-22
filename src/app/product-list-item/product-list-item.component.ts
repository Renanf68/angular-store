import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart/cart.service';

export type QuantityOption = { value: number; label: string };
export const defaultQuantityOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
] as QuantityOption[];

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  quantityOptions: QuantityOption[];

  constructor(private cartService: CartService) {
    this.product = new Product({
      name: '',
      description: '',
      price: 0,
      url: '',
    });
    this.quantity = 1;
    this.quantityOptions = defaultQuantityOptions;
  }

  ngOnInit(): void {}

  public cart() {
    return this.cartService;
  }

  public addToCart(product: Product) {
    product.updateQuantity(this.quantity);
    this.cartService.addToCart(product);
  }
}
