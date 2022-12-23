import { ComponentFixture, TestBed } from '@angular/core/testing';
import { testDeclarations, testImports } from '../app.component.spec';
import { Product } from '../models/Product';
import { CartService } from '../services/cart/cart.service';
import { ProductListItemComponent } from './product-list-item.component';

describe('ProductListItemComponent', () => {
  let cartService: CartService;
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;
  let testProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: testDeclarations,
      imports: testImports,
    }).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testProduct = new Product({
      name: 'Test',
      description: 'Test product',
      price: 10.0,
      url: '',
    });
    component.product = testProduct;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product infos', () => {
    expect(component.product.name).toEqual('Test');
    expect(component.product.price).toEqual(10.0);
    expect(component.quantity).toEqual(1);
  });

  it('should be able to add product to cart with correct quantity', () => {
    component.quantity = 2;
    component.addToCart();
    const cart = cartService.getCart();
    expect(cart.length).toEqual(1);
    expect(cart[0].id).toEqual(component.product.id);
    expect(cart[0].quantity).toEqual(2);
  });
});
