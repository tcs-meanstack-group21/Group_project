import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/order.model';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-employee-order-status',
  templateUrl: './employee-order-status.component.html',
  styleUrls: ['./employee-order-status.component.css']
})
export class EmployeeOrderStatusComponent implements OnInit {
  updateMsg?:string;

  orderUpdateForm = new FormGroup({
    oid : new FormControl(),
    status : new FormControl()
  })

  constructor(public ordService:OrderService) { }

  orders:Array<Order> = []

  ngOnInit(): void {
    this.ordService.retrieveOrder().subscribe(result => this.orders = result)
  }

  updateStatus( statusRef: any ){
    console.log(statusRef);
  
    this.ordService.updateStatus(statusRef).subscribe( (result:string) => this.updateMsg = result, (error:string) => this.updateMsg = error );


    

  };
}
