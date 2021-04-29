import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  ticketInfo = new FormGroup({
    uid: new FormControl(),
    ticketBody: new FormControl()
  })

  constructor(private custSer: CustomerService, private route: Router) { }

  ngOnInit(): void {
  }

  sendTicket(): void {
    console.log("Function call")
    this.custSer.raiseTicket(this.ticketInfo.value).subscribe((data: any) => {
      console.log(data)
      this.route.navigate(["/"])
    })
  }

}
