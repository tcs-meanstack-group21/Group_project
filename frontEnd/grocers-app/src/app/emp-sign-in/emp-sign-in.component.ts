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
<<<<<<< HEAD
    pass : new FormControl(),
    conf : new FormControl()
  })

=======
    pass : new FormControl()
  })

  message?: string ;
>>>>>>> bde9a77315fb651a3b19a04e17700e626fc54917

  constructor(private empServer: EmployeeService ) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
  signIn(){
    this.empServer.empSignIn(this.signInInfo.value)
=======
  async signIn(){ 
    await this.empServer.empSignIn(this.signInInfo.value);
     this.message = this.empServer.signInMessage;
     this.message = "Not correct username and password"
>>>>>>> bde9a77315fb651a3b19a04e17700e626fc54917
  }   

}
