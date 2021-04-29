import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  ipAddress : string = "http://localhost";

  constructor(private http : HttpClient, private router : Router ) { }

  custSignIn(value : any){
    this.http.get(this.ipAddress+":9090/customer/custSignIn", value, ).
    subscribe(result => {
      this.router.navigate(["custDash"])
    }, err => {
      console.log("err "+ err.message)
    })
  }
  custSignUp(value : any){
    console.log(JSON.stringify(value))
    this.http.post(this.ipAddress+":9090/customer/custSignUp", JSON.stringify(value), ).
    subscribe(result => {
      console.log(result)
    }, err => {
      console.log("err "+ err.message)
    })
  }

  getCart(uid: any): Observable<any> {
    return this.http.get(this.ipAddress + `/customer/${uid}/getCart`)
  }

  addProductToCart(uid: any, pid: any, quantity: number): Observable<any> {
    return this.http.put(this.ipAddress + `/customer/${uid}/addProductToCart`, {pid: pid, quantity: quantity})
  }

  removeProductFromCart(uid: any, pid: any) {
    console.log("Removed " + pid);
    return this.http.delete(this.ipAddress + `/customer/${uid}/removeProductFromCart/${pid}`)
  }

  checkout(uid: any) {
    return this.http.post(this.ipAddress + `/customer/${uid}/checkout`, {})
  }
}
