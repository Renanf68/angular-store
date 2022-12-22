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
  private consumer_name: string = '';
  private is_submitted: boolean = false;

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
    this.cartService.updateCartProduct(changes);
    this.getCart();
  }

  removeCartProduct(product: Product) {
    this.cartService.removeCartProduct(product);
    this.getCart();
  }

  onSubmitOrder(fullname: string) {
    this.consumer_name = fullname;
    this.is_submitted = true;
  }

  onOrderComplete() {
    // this.consumer_name = '';
    // this.is_submitted = false;
    this.cartService.clearCart();
  }

  public get consumer() {
    return this.consumer_name;
  }

  public get isSubmitted() {
    return this.is_submitted;
  }
}
