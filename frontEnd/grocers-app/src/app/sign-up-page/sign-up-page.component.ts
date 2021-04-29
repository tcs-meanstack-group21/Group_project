import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpInfo = new FormGroup({
    user : new FormControl(),
    pass : new FormControl(),
    conf : new FormControl()
  })

  
  constructor(private custServer : CustomerService) { }

  ngOnInit(): void {
  }
  signUp(){
    
    this.custServer.custSignUp(this.signUpInfo);
  }
}
