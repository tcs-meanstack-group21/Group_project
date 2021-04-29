import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  
  id: number|null =   12;//sessionStorage.getItem('id');

  addFundsGroup = new FormGroup({
    pass : new FormControl()
  })
  
  constructor(private custServer : CustomerService) { }

  ngOnInit(): void {
  }

  addFunds(value : any){
    const jsonValue : string = `{"id": "${this.id}", "amount" : "${value}"}`
    this.custServer.addFunds(jsonValue)
  }

}
