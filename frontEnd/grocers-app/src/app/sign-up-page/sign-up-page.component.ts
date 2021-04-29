import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  customerRef: any;

<<<<<<< HEAD
    
=======
  signUpInfo = new FormGroup({
    email : new FormControl(),
    pass : new FormControl(),
    conf : new FormControl()
  })

  
>>>>>>> cdebddf2c43dc4bb424807bca5bc5111cfe12afe
  constructor(private custServer : CustomerService) { }

  ngOnInit(): void {
  }
  addCustomer(customerRef:any){
    console.log(customerRef);
    this.custServer.custSignUp(customerRef);
  }
}
