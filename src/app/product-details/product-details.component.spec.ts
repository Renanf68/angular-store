import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { testDeclarations, testImports } from '../app.component.spec';
import { ProductProps } from '../models/Product';
import { CartService } from '../services/cart/cart.service';

import { ProductDetailsComponent } from './product-details.component';

const testProduct = {
  id: 'AAA',
  name: 'Test',
  description: 'Test product',
  price: 10.0,
  url: '',
} as ProductProps;

const testProduct2 = {
  id: 'BBB',
  name: 'Test2',
  description: 'Test product2',
  price: 20.0,
  url: '',
} as ProductProps;

const fakeList = [testProduct, testProduct2];

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
                get: () => testProduct.id!,
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
    component.selectProduct(testProduct.id!, fakeList);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product infos', () => {
    expect(component.product?.name).toEqual('Test');
    expect(component.product?.description).toEqual('Test product');
    expect(component.product?.price).toEqual(10.0);
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
