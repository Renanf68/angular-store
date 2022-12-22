import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Product } from '../models/Product';
import { ProductService } from '../services/product/product.service';
import {
  defaultQuantityOptions,
  QuantityOption,
} from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  private _product: Product | null;
  quantity: number;
  quantityOptions: QuantityOption[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this._product = null;
    this.quantity = 1;
    this.quantityOptions = defaultQuantityOptions;
  }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this._product = this.productService.findById(productId) ?? null;
  }

  public get product() {
    return this._product;
  }

  public addToCart(product: Product) {
    product.updateQuantity(this.quantity);
    this.cartService.addToCart(product);
  }
}
