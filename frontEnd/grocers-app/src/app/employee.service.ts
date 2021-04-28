import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> bde9a77315fb651a3b19a04e17700e626fc54917

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

<<<<<<< HEAD
  constructor(private http : HttpClient) { }

  
  empSignIn(value:any){
    console.log(value)
    this.http.get("http://localhost:9090/empSignIn",value).
    subscribe(result => console.log(result), error => console.log(error))
  }

}
=======
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

}
>>>>>>> bde9a77315fb651a3b19a04e17700e626fc54917
