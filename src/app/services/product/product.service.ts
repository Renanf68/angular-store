import { Injectable } from '@angular/core';
import { ProductProps } from '../../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductProps[]> {
    return this.http.get<ProductProps[]>('/assets/data.json');
  }
}
