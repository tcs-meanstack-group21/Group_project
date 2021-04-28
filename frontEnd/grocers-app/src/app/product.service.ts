import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ipAddress: string = "http://localhost:9090"
  constructor(public http: HttpClient) { }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.ipAddress + "/product/getProducts") //this URL not yet implemented
  }
}
