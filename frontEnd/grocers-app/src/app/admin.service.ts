import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(public http:HttpClient) { }

    adminSignIn(adminRef:any):any {
      return this.http.post("http://localhost:9090/admin/adminSignIn",adminRef,{responseType:"text"})
    }

    addEmployeeInfo(employeeRef:any){
      this.http.post("http://localhost:9090/employee/addEmployeeInfo",employeeRef,{responseType:"text"}).
      subscribe(result=>console.log(result),error=>console.log(error));
    }

    deleteEmployeeById(id:any):any{
      return this.http.delete("http://localhost:9090/employee/deleteEmployeeById/"+id,{responseType:'text'});
    }
  
    retrieveOrderByDate(dateOrdered:any):Observable<Order[]>{
      return this.http.get<Order[]>("http://localhost:9090/reports/retrieveOrderByDate/"+dateOrdered)
    }
  }