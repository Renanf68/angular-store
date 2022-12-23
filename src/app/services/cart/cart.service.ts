import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[];

  constructor(private router: Router) {
    this.cart = [];
  }

  public getCart() {
    return this.cart;
  }

  public addToCart(product: Product) {
    if (this.cart.length > 0) {
      const productIndexInCart = this.cart.findIndex(
        (item) => item.id === product.id
      );
      if (productIndexInCart > -1) {
        this.cart[productIndexInCart].updateQuantity(product.quantity!);
        alert(
          `Item ${product.name} already in cart! The quantity was updated.`
        );
        return;
      }
    }
    this.cart.push(product);
    alert(`Item ${product.name} added to cart!`);
  }

  public clearCart() {
    this.router.navigate(['/']);
    this.cart = [];
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
