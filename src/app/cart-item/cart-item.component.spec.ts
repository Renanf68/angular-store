import { ComponentFixture, TestBed } from '@angular/core/testing';
import { testDeclarations, testImports } from '../app.component.spec';
import { Product } from '../models/Product';
import { CartService } from '../services/cart/cart.service';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let cartService: CartService;
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let testProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: testDeclarations,
      imports: testImports,
    }).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    testProduct = new Product({
      name: 'Test',
      description: 'Test product',
      price: 10.0,
      url: '',
      quantity: 2,
    });
    cartService.addToCart(testProduct);
    const cart = cartService.getCart();
    component.product = cart[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product infos', () => {
    expect(component.product.name).toEqual('Test');
    expect(component.product.price).toEqual(10.0);
    expect(component.quantity).toEqual(2);
  });

  it('should be able to call update product output with correct data', async () => {
    spyOn(component.updateCartProduct, 'emit');
    component.quantity = 4;
    component.updateProduct();
    expect(component.updateCartProduct.emit).toHaveBeenCalledWith({
      productId: component.product.id,
      quantity: 4,
    });
  });

  it('should be able to call remove product output with correct data', async () => {
    spyOn(component.removeCartProduct, 'emit');
    component.removeProduct();
    expect(component.removeCartProduct.emit).toHaveBeenCalledWith(
      component.product
    );
  });
});
