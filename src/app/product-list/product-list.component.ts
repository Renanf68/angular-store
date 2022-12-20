import { Component, OnInit } from '@angular/core';
import { Product, ProductProps } from '../models/Product';
import { ProductService } from '../services/product.service';

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
