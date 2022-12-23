import { ComponentFixture, TestBed } from '@angular/core/testing';
import { testDeclarations, testImports } from '../app.component.spec';
import { ProductListComponent } from './product-list.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(component.title).toEqual('Catalog');
  });
  it('should return product list', () => {
    const products = component.products;
    expect(products.length).toEqual(6);
  });
});
