import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Product, ProductProps } from '../models/Product';
import { ProductService } from '../services/product/product.service';
import {
  defaultQuantityOptions,
  QuantityOption,
} from '../product-list-item/product-list-item.component';
import { ProductMapper } from '../services/mappers/product-mapper';

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

  public selectProduct(productId: string | null, list: ProductProps[]) {
    const product = list.find((item) => item.id === productId);
    this._product = product ? ProductMapper.toDomain(product) : null;
  }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe((res) => {
      this.selectProduct(productId, res);
    });
  }

  public get product() {
    return this._product;
  }

  public addToCart() {
    this._product!.updateQuantity(this.quantity);
    this.cartService.addToCart(this._product!);
  }
}
