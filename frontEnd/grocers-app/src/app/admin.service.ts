import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(public http:HttpClient) { }
    addEmployeeInfo(employeeRef:any){
      this.http.post("http://localhost:9090/employee/addEmployeeInfo",employeeRef,{responseType:"text"}).
      subscribe(result=>console.log(result),error=>console.log(error));
    }

    deleteEmployeeById(id:any):any{
      return this.http.delete("http://localhost:9090/employee/deleteEmployeeById/"+id,{responseType:'text'});
    }
  
    retrieveOrderByDate(dateOrdered:any):Observable<order[]>{
      return this.http.get<order[]>("http://localhost:9090/reports/retrieveOrderByDate/"+dateOrdered)
    }
  }