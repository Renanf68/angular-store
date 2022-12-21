import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Catalog';
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    console.log(products);
    this.products = products;
  }
}
