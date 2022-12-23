import { ComponentFixture, TestBed } from '@angular/core/testing';
import { testDeclarations, testImports } from '../app.component.spec';
import { Product } from '../models/Product';
import { CartService } from '../services/cart/cart.service';

import { CartComponent } from './cart.component';

const product1 = new Product({
  name: 'Test1',
  description: 'Test product 1',
  price: 10.0,
  url: '',
  quantity: 2,
});

const product2 = new Product({
  name: 'Test2',
  description: 'Test product 2',
  price: 20.0,
  url: '',
  quantity: 1,
});

describe('CartComponent', () => {
  let cartService: CartService;
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: testDeclarations,
      imports: testImports,
    }).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    cartService.addToCart(product1);
    cartService.addToCart(product2);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart products', () => {
    expect(component.products.length).toEqual(2);
  });

  it('should get correct order total value', () => {
    const cart = cartService.getCart();
    const total = cart.reduce(
      (result, item) => (result += item.quantity! * item.price),
      0
    );
    expect(component.getTotal()).toEqual(total.toFixed(2));
  });

  it('should be able to update cart product', () => {
    component.updateCartProduct({
      productId: product1.id,
      quantity: 4,
    });
    const cart = cartService.getCart();
    const cartProduct = cart.find((item) => item.id === product1.id);
    expect(cartProduct?.quantity).toEqual(4);
  });

  it('should be able to remove cart product', () => {
    component.removeCartProduct(product2);
    const cart = cartService.getCart();
    const removedProductIndex = cart.findIndex(
      (item) => item.id === product2.id
    );
    expect(cart.length).toEqual(1);
    expect(removedProductIndex).toEqual(-1);
  });

  it('should render success page when submitted', () => {
    component.onSubmitOrder('Test user');
    fixture.detectChanges();
    const successTittle = fixture.nativeElement.querySelector('h1');
    expect(successTittle.textContent).toContain('Success!');
  });

  it('should be able to clear cart when onOrderComplete is called', () => {
    component.onOrderComplete();
    const cart = cartService.getCart();
    expect(cart.length).toEqual(0);
  });
});
