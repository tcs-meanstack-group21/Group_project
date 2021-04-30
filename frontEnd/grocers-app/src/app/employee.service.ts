import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  ipAddress : string = "http://localhost:9090";

  
  constructor(private http : HttpClient ){ }

  
  empSignIn(value : any):any {
    
    this.http.post(this.ipAddress+"/employee/empSignIn", value)
  }


  updateProfile( profileRef:any ):any {
    return this.http.put("http://localhost:9090/employee/empEdit", profileRef, { responseType: 'text' })
  }

  getid(value:any) : any{
    return this.http.post("http://localhost:9090/employee/getid", value)
  }

}
