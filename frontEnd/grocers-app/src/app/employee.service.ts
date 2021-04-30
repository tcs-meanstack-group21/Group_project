import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  ipAddress : string = "http://localhost:9090";

  constructor(private http : HttpClient ){ }

  
  empSignIn(value:any):any {
    console.log(value)
    this.http.post(`${this.ipAddress}/employee/empSignIn`, value, {responseType:"text"})
  }

}
