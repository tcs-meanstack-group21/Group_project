import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './model.request';
 
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http:HttpClient) { }

  submitRequest( requestRef:any ): any {
    return this.http.post("http://localhost:9090/request/sendRequest", requestRef, { responseType:'text' })
  }

  retrieveRequests():Observable<Request[]> {
    return this.http.get<Request[]>("http://localhost:9090/request/retrieveRequests")
  }
}



