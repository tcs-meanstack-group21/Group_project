import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  submitStatus( statusRef:any ): any {
    return this.http.post("http://localhost:9090/order/changeOrderStatus", statusRef, { responseType:'text' })
  }


}
