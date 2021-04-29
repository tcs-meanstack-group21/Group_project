import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  updateStatus( statusRef:any ):any {
    return this.http.put("http://localhost:9090/order/statusUpdate", statusRef, { responseType: 'text' })
  }

  retrieveOrder():Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/retrieveOrders")
  }
}
