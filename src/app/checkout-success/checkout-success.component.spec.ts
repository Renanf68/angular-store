import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../models/Product';
import { CartService } from '../services/cart/cart.service';

import { CheckoutSuccessComponent } from './checkout-success.component';

fdescribe('CheckoutSuccessComponent', () => {
  let cartService: CartService;
  let component: CheckoutSuccessComponent;
  let fixture: ComponentFixture<CheckoutSuccessComponent>;
  let span: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutSuccessComponent],
    }).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CheckoutSuccessComponent);
    component = fixture.componentInstance;
    component.consumer = 'Test user';
    component.total = '200.00';
    span = fixture.nativeElement.querySelectorAll('span');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct consumer name', () => {
    expect(span[0].textContent).toContain('Test user');
  });

  it('should display correct order total value', () => {
    expect(span[1].textContent).toContain('200.00');
  });

  it('should be able to clear cart when calls completeOrder', () => {
    const product = new Product({
      name: 'Test',
      description: 'Test product',
      price: 10.0,
      url: '',
      quantity: 2,
    });
    cartService.addToCart(product);
    const cartBefore = cartService.getCart();
    expect(cartBefore.length).toEqual(1);
    component.completeOrder();
    setTimeout(() => {
      const cartAfter = cartService.getCart();
      expect(cartAfter.length).toEqual(0);
    }, 2000);
  });
});
