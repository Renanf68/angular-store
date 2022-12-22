import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

const fakeProduct = new Product({
  id: '1a6e0804-2bd0-4672-b79d-d97027f9071a',
  name: 'Book',
  price: 9.99,
  url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  description: 'You can read it!',
  quantity: 2,
});

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[];

  constructor() {
    this.cart = [fakeProduct];
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
