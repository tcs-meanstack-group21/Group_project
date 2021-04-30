import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ipAddress = "http://localhost:9090"

  constructor(public http:HttpClient) { }

  updateStatus( statusRef:any ):any {
    return this.http.put(this.ipAddress+"/order/statusUpdate", statusRef, { responseType: 'text' })
  }

  retrieveOrder():Observable<Order[]> {
    return this.http.get<Order[]>(this.ipAddress+"/order/retrieveOrders")
  }

  orderList():Observable<Order[]>{
    return this.http.get<Order[]>(this.ipAddress+"/order/orders")
  }

  removeOrder(id : any){
    const idString = `"id": ${id}`
    return this.http.delete(this.ipAddress+"/order/orderDelete", id )
  
  }
  
}
