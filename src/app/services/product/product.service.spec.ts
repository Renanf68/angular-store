import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list os products', () => {
    const products = service.getProducts();
    expect(products.length).toEqual(6);
  });

  it('should return correct product by id', () => {
    const product = service.findById('5a6e0804-2bd0-4672-b79d-d97027f9071e');
    expect(product?.name).toEqual('Cup');
  });
});
