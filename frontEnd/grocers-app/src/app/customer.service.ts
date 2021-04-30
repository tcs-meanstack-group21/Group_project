import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  ipAddress : string = "http://localhost:9090";
  
  constructor(private http : HttpClient, private router : Router ) { }

  custSignIn(value : any){
    this.http.get(this.ipAddress+"/customer/custSignIn", value, ).
    subscribe(result => {
      this.router.navigate(["custDash"])
    }, err => {
      console.log("err "+ err.message)
    })
  }
 
  
  custSignUp(customerRef:any){
    this.http.post(this.ipAddress+"/customer/custSignUp",customerRef,{responseType:"text"}).
    subscribe(result => {
      console.log(result)
    }, err => {
      console.log("err "+ err.message)
    })
  }
  addFunds(amount : any){

    const objAmount = JSON.parse(amount)
    return this.http.put(this.ipAddress+`/customer/addFunds`,objAmount , {responseType: "text"}).subscribe(result => {
      console.log(result)
    }, err => {
      console.log("err "+ err.message)
    })
  }

  getFunds(id:any){
    return this.http.get(this.ipAddress+`/customer/addFunds` , {responseType: "text"}).subscribe(result => {
      console.log(result)
      return result
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
    return this.http.delete(this.ipAddress + `/customer/${uid}/removeProductFromCart/${pid}`)
  }

  checkout(uid: any) {
    return this.http.post(this.ipAddress + `/customer/${uid}/checkout`, {})
  }

  raiseTicket(value: any) {
    return this.http.post(this.ipAddress + "/ticket/raiseTicket", value, {responseType: "text"})
  }

  removeLock( cust: any, tic: any) {
    return this.http.delete(this.ipAddress + `/ticket/unLock/${cust}/${tic}`)
  }
}
