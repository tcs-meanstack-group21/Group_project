import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-cust-sign-in',
  templateUrl: './cust-sign-in.component.html',
  styleUrls: ['./cust-sign-in.component.css']
})
export class CustSignInComponent implements OnInit {


  signInInfo = new FormGroup({
    user : new FormControl(),
    pass : new FormControl()
  })
  
  message?: string;

  constructor(private custServer : CustomerService) { }

  ngOnInit(): void {
  }

  async signIn(){
    await this.custServer.custSignIn(this.signInInfo.value);
     this.message = "Not correct username and password"
  }

}
