import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { testDeclarations, testImports } from '../app.component.spec';
import { CartService } from '../services/cart/cart.service';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let cartService: CartService;
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: testDeclarations,
      imports: testImports,
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '5a6e0804-2bd0-4672-b79d-d97027f9071e',
              },
            },
          },
        },
      ],
    }).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product infos', () => {
    expect(component.product?.name).toEqual('Cup');
    expect(component.product?.description).toEqual('Drink anything with it!');
    expect(component.product?.price).toEqual(4.99);
    expect(component.quantity).toEqual(1);
  });

  it('should be able to add product to cart with correct quantity', () => {
    component.quantity = 4;
    component.addToCart();
    const cart = cartService.getCart();
    expect(cart.length).toEqual(1);
    expect(cart[0].id).toEqual(component.product!.id);
    expect(cart[0].quantity).toEqual(4);
  });
});
