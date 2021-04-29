import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  ipAddress = "http://localhost:9090"

  constructor(public http: HttpClient) { }

  getCart(uid: any): Observable<any> {
    return this.http.get(this.ipAddress + `/customer/${uid}/getCart`)
  }

  addProductToCart(uid: any, pid: any, quantity: number): Observable<any> {
    return this.http.put(this.ipAddress + `/customer/${uid}/addProductToCart`, {pid: pid, quantity: quantity})
  }

  removeProductFromCart(uid: any, pid: any) {
    return this.http.delete(this.ipAddress + `/customer/${uid}/removeProductFromCart/${pid}`)
  }

  checkout(uid: any) {
    return this.http.post(this.ipAddress + `/customer/${uid}/checkout`, {})
  }
}
