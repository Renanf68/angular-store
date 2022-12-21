import { Injectable } from '@angular/core';
import { ProductProps } from '../../models/Product';
import data from '../../../assets/data';
import { ProductMapper } from '../mappers/product-mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: ProductProps[];

  constructor() {
    this.products = data;
  }

  public getProducts() {
    return this.products.map(ProductMapper.toDomain);
  }
}
