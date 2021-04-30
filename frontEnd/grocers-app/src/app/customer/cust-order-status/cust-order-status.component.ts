import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order.model';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-cust-order-status',
  templateUrl: './cust-order-status.component.html',
  styleUrls: ['./cust-order-status.component.css']
})
export class CustOrderStatusComponent implements OnInit {

  uid?:number = 12
  custOrderList?:Order[];
  
  constructor(private orderSer : OrderService) { }

  ngOnInit(): void {
    this.orderSer.orderList().subscribe(data => this.custOrderList = data);
  }

  removeOrder(order : Order){
    this.orderSer.removeOrder(order._id).subscribe(data => console.log(data));

  }

}
