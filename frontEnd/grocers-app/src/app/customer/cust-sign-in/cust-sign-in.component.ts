import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-cust-sign-in',
  templateUrl: './cust-sign-in.component.html',
  styleUrls: ['./cust-sign-in.component.css']
})
export class CustSignInComponent implements OnInit {


  custsignInInfo = new FormGroup({
    email : new FormControl(),
    pass : new FormControl()
  })
  
  message?: string;

  constructor(private custServer : CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

   signIn(){
    
     this.custServer.custSignIn(this.custsignInInfo.value)
  }

}
