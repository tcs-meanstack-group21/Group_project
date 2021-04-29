import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  ipAddress : string = "http://localhost:9090";

  constructor(private http : HttpClient, private router : Router ){ }

  
  empSignIn(value:any){
    this.http.get(`${this.ipAddress}/empSignIn`, value ).
    subscribe(result => {
      console.log(result)
      if(result !== null){
        this.router.navigate(["empDash"])
      }
      // 
    }, err => {
      console.log("err "+ err.message)
    })
  }

  updateProfile( profileRef:any ):any {
    return this.http.put("http://localhost:9090/employee/empEdit", profileRef, { responseType: 'text' })
  }


}
