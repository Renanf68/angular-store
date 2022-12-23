import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../services/cart/cart.service';

import { CheckoutSuccessComponent } from './checkout-success.component';

describe('CheckoutSuccessComponent', () => {
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
});
