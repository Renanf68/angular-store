import { TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/Product';

import { CartService } from './cart.service';

fdescribe('CartService', () => {
  let service: CartService;
  let testProduct: Product;
  let testProduct2: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    testProduct = new Product({
      name: 'Test',
      description: 'Test product',
      price: 10.0,
      url: '',
    });
    testProduct2 = new Product({
      name: 'Test2',
      description: 'Test product 2',
      price: 30.0,
      url: '',
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cart products', () => {
    const cartProducts = service.getCart();
    expect(cartProducts.length).toEqual(0);
  });

  it('should be able to add product to cart', () => {
    service.addToCart(testProduct);
    const cartProducts = service.getCart();
    expect(cartProducts[0].name).toEqual('Test');
  });

  it('should be able to update product quantity in cart', () => {
    service.addToCart(testProduct);
    service.updateCartProduct({
      productId: testProduct.id,
      quantity: 2,
    });
    const cartProducts = service.getCart();
    expect(cartProducts[0].quantity).toEqual(2);
  });

  it('should be able to remove product from cart', () => {
    service.addToCart(testProduct);
    service.addToCart(testProduct2);
    const cartBefore = service.getCart();
    expect(cartBefore.length).toEqual(2);
    service.removeCartProduct(testProduct);
    const cartAfter = service.getCart();
    expect(cartAfter.length).toEqual(1);
    expect(cartAfter[0].name).toEqual('Test2');
  });

  it('should be able to clear cart data', () => {
    service.addToCart(testProduct);
    const cartbefore = service.getCart();
    expect(cartbefore.length).toEqual(1);
    service.clearCart();
    const cartAfter = service.getCart();
    expect(cartAfter.length).toEqual(0);
  });
});
