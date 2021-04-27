import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {

  productRequestForm = new FormGroup({
    pid : new FormControl(),
    qupdate : new FormControl(),
    uid : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  sendProductRequest(){}

}
