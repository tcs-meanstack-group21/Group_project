import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-sign-in',
  templateUrl: './emp-sign-in.component.html',
  styleUrls: ['./emp-sign-in.component.css']
})
export class EmpSignInComponent implements OnInit {

  signInInfo = new FormGroup({
    email : new FormControl(),
    pass : new FormControl()
  })

  message?: string ;

  constructor(private empServer: EmployeeService , private router: Router) { }

  ngOnInit(): void {
  }
   signIn(){ 
    this.empServer.empSignIn(this.signInInfo.value).subscribe((result:string)=>{
        this.message=result
        if(this.message!=="null"){
          this.router.navigate(["../empDash"])
        }
        else{
          this.message = "Invalid Login Credentials"
          console.log(this.message)
        }
      },(error:string)=>this.message=error);  
  }   

}
