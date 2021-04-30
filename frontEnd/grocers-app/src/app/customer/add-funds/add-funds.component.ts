import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  
  id: string|null =  sessionStorage.getItem('customer');
  email :String | null = sessionStorage.getItem('email');
  funds: any ;
  
  addFundsGroup = new FormGroup({
    pass : new FormControl()
  })
  
  constructor(private custServer : CustomerService) { }

  ngOnInit(): void {
  }

  addFunds(value : any){
    if(this.email !== null){
    
    const obj = new Object({
      email: this.email,
      amount: value
    })

    
    
    this.custServer.addFunds(obj).subscribe(result => {
      console.log(result)
    }, err => {
      console.log("err "+ err.message)
    })

     this.custServer.getFunds(obj).subscribe(result => {
      console.log(result)
       this.funds = "Funds: "+JSON.parse(JSON.stringify(result)).funds
    }, err => {
      console.log("err "+ err.message)
    })
  }
}
}
