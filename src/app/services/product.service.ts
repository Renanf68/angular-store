import { Injectable } from '@angular/core';
import { ProductProps } from '../models/Product';
import data from '../../assets/data';
import { ProductMapper } from './mappers/product-mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: ProductProps[];
  private cart: ProductProps[];

  constructor() {
    this.products = data;
    this.cart = [];
  }

  public getProducts() {
    return this.products.map(ProductMapper.toDomain);
  }

  public addToCart(product: ProductProps) {
    this.cart.unshift(product);
    alert('Product added to cart!');
  }
}
