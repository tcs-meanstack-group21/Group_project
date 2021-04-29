import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  signInMessage? : string;

  constructor(private http : HttpClient, private router : Router ){ }

  
  empSignIn(value:any){
    this.http.post("http://localhost:9090/empSignIn", value, ).
    subscribe(result => {
      console.log("result "+result)
      this.router.navigate(["empDash"])
    }, err => {
      console.log("err "+ err.message)
    })
  }

  updateProfile( profileRef:any ):any {
    return this.http.put("http://localhost:9090/employee/updateEmployee", profileRef, { responseType: 'text' })
  }


}
