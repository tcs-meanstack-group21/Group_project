import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-sign-in',
  templateUrl: './emp-sign-in.component.html',
  styleUrls: ['./emp-sign-in.component.css']
})
export class EmpSignInComponent implements OnInit {

  signInInfo = new FormGroup({
    user : new FormControl(),
    pass : new FormControl()
  })

  message?: string ;

  constructor(private empServer: EmployeeService ) { }

  ngOnInit(): void {
  }
  async signIn(){ 
    await this.empServer.empSignIn(this.signInInfo.value);
     this.message = "Not correct username and password"
  }   

}
