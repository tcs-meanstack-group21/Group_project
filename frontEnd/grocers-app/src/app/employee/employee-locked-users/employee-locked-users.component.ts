import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Ticket } from 'src/app/model.ticket';

@Component({
  selector: 'app-employee-locked-users',
  templateUrl: './employee-locked-users.component.html',
  styleUrls: ['./employee-locked-users.component.css']
})
export class EmployeeLockedUsersComponent implements OnInit {

  tickets?:Array<Ticket>;
  Msg?:string;

  constructor(public custService: CustomerService) { }

  ngOnInit(): void {
  }

 removeTicket( tick: any ){
   this.custService.removeLock( tick.customer, tick._id ).
   subscribe(data => console.log(data))}


}