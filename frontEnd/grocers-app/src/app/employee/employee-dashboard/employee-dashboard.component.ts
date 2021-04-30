import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model.request';
import { Order } from 'src/app/order.model';
import { OrderService } from 'src/app/order.service';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  name : string = "employee";
  orders:Array<Order> = []
  requests?:Array<Request>;

  constructor( public ordService:OrderService, public reqService:RequestService ) { }

  ngOnInit( ): void {
    this.ordService.retrieveOrder().subscribe(result => this.orders = result)
    this.reqService.retrieveRequests().subscribe( result => this.requests = result)
  }

  refreshTable(){
    this.reqService.retrieveRequests().subscribe( result => this.requests = result)
  }
}
