import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  
  empSignIn(value:any){
    console.log(value)
    this.http.get("http://localhost:9090/empSignIn",value).
    subscribe(result => console.log(result), error => console.log(error))
  }

}