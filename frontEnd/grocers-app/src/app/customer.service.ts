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
}
