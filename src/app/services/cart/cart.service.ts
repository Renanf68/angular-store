import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[];

  constructor() {
    this.cart = [];
  }

  public getCart() {
    console.log('cart: ', this.cart);
    return this.cart;
  }

  public addToCart(product: Product) {
    this.cart.unshift(product);
    alert(`Item ${product.name} added to cart!`);
  }

  public updateCartProduct(changes: { productId: string; quantity: number }) {
    const { productId, quantity } = changes;
    this.cart.forEach((product) => {
      if (product.id === productId) {
        product.updateQuantity(quantity);
      }
    });
  }

  public removeCartProduct(product: Product) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
    alert(`Item ${product?.name} removed from cart!`);
  }
}
