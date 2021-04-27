import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  addProductDetails(productRef:any) {
    this.http.post("http://localhost:9090/product/addProduct",productRef)
      .subscribe(result=>console.log(result),error=>console.log(error));
  }

  retrieveProductDetails():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/product/retrieveProducts")
  }
}
