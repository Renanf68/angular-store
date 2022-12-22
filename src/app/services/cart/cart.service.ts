import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductMapper } from '../mappers/product-mapper';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[];

  constructor() {
    this.cart = [];
  }

  public getCartData() {
    return this.cart.map(ProductMapper.toDomain);
  }

  public addToCart(product: Product) {
    this.cart.unshift(product);
    alert('Added to cart!');
    console.log('cart: ', this.cart);
  }
}
