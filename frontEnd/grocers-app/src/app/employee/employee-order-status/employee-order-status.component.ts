import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-order-status',
  templateUrl: './employee-order-status.component.html',
  styleUrls: ['./employee-order-status.component.css']
})
export class EmployeeOrderStatusComponent implements OnInit {
  
  orderUpdateForm = new FormGroup({
    oid : new FormControl(),
    status : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  updateStatus(){

  };
}
