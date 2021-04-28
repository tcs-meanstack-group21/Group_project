import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  ipAddress : string = "http://localhost";

  constructor(private http : HttpClient, private router : Router ){ }

  
  empSignIn(value:any){
    this.http.post(this.ipAddress+":9090/empSignIn", value, ).
    subscribe(result => {
      this.router.navigate(["empDash"])
    }, err => {
      console.log("err "+ err.message)
    })
  }

}
