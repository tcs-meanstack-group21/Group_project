import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-dashoard',
  templateUrl: './cust-dashoard.component.html',
  styleUrls: ['./cust-dashoard.component.css']
})
export class CustDashoardComponent implements OnInit {

  name : string = "user";

  constructor() { }

  ngOnInit(): void {
  }

}
