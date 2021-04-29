import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-cust-sign-in',
  templateUrl: './cust-sign-in.component.html',
  styleUrls: ['./cust-sign-in.component.css']
})
export class CustSignInComponent implements OnInit {


  custsignInInfo = new FormGroup({
    user : new FormControl(),
    pass : new FormControl()
  })
  
  message?: string;

  constructor(private custServer : CustomerService) { }

  ngOnInit(): void {
  }

   signIn(){
    
     this.custServer.custSignIn(this.custsignInInfo.value);
     this.message = "Not correct username and password"
  }

}
