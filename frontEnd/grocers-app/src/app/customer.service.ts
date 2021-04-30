import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  ipAddress : string = "http://localhost:9090";
  message? : string
  
  constructor(private http : HttpClient, private router : Router ) { }

  custSignIn(value : any) : any{
    return this.http.post(this.ipAddress+"/customer/custSignIn", value, {responseType:"text"}).subscribe((result : string)=>{
     
      if(result!=="null"){
        const resultObj = JSON.parse(result)
        console.log(resultObj)
        sessionStorage.setItem("customer",resultObj._id)
        sessionStorage.setItem("email",resultObj.email)
        this.router.navigate(["customer/cart"])
      }
      else{
        this.message = "Invalid Login Credentials";
      }
    },(error:string)=>this.message=error);  
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
    return this.http.put(this.ipAddress+`/customer/addFunds`,amount , {responseType: "text"})
  }

  updatePro(value : any) : any{
    this.http.put("http://localhost:9090/customer/updateProf", value , {responseType : "text"}).
    subscribe(result => {
      console.log(result)
    }, err => {
      console.log("err "+ err.message)
    })
  }
  

  getFunds(value : any){
    return this.http.post(this.ipAddress+`/customer/getFunds` ,value)
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
}
