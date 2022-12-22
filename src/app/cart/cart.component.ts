import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.products = this.cartService.getCart();
  }

  getTotal() {
    const result = this.products.reduce(
      (result, prod) => (result += prod.price * (prod.quantity ?? 1)),
      0
    );
    return result.toFixed(2);
  }

  updateCartProduct(changes: { productId: string; quantity: number }) {
    console.log('CartComponent updateCartProduct');
    this.cartService.updateCartProduct(changes);
    this.getCart();
  }

  removeCartProduct(product: Product) {
    this.cartService.removeCartProduct(product);
    this.getCart();
  }
}
