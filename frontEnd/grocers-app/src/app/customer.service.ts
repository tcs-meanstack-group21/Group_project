import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  ipAddress : string = "http://localhost";

  constructor(private http : HttpClient, private router : Router ) { }

  custSignIn(value : any){
    this.http.post(this.ipAddress+":9090/customer/custSignIn", value, ).
    subscribe(result => {
      this.router.navigate(["custDash"])
    }, err => {
      console.log("err "+ err.message)
    })
  }
  custSignUp(value : any){
    this.http.post(this.ipAddress+":9090/customer/custSignUp", value, ).
    subscribe(result => {
      
    }, err => {
      console.log("err "+ err.message)
    })
  }

}
