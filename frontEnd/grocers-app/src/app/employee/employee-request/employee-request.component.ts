import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Request } from 'src/app/model.request';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {
  appearAlert:boolean = false;
  submitMsg?:string;

  productRequestForm = new FormGroup({
    pid : new FormControl(),
    qupdate : new FormControl(),
    uid : new FormControl()
  })

  constructor(public reqService:RequestService) { }

  requests?:Array<Request>;

  ngOnInit(): void {
    this.reqService.retrieveRequests().subscribe( result => this.requests = result)
  }

  sendProductRequest( requestRef: any ){
    console.log(requestRef);

    this.reqService.submitRequest(requestRef)
    .subscribe( (result:string)=> this.submitMsg = result, (error:string)=> this.submitMsg = error );
    this.appearAlert = true;
  }

  refreshTable(){
    this.reqService.retrieveRequests().subscribe( result => this.requests = result)
  }
}
