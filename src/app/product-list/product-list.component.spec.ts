import { ComponentFixture, TestBed } from '@angular/core/testing';
import { testDeclarations, testImports } from '../app.component.spec';
import { Product } from '../models/Product';
import { ProductListComponent } from './product-list.component';

const testProduct = new Product({
  name: 'Test',
  description: 'Test product',
  price: 10.0,
  url: '',
});

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: testDeclarations,
      imports: testImports,
    }).compileComponents();
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const fakeRequest = () => {
    component.products = [testProduct];
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(component.title).toEqual('Catalog');
  });
  it('should return product list', () => {
    spyOn(component, 'ngOnInit').and.callFake(fakeRequest);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.products.length).toEqual(1);
  });
});
