import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  appProductDetails(productRef:any) {
    this.http.post("http://localhost:9090/product/addProduct",productRef)
      .subscribe(result=>console.log(result),error=>console.log(error));
  }
}
