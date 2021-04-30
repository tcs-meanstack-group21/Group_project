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

  id?: number;
  message?: string ;

  constructor(private empServer: EmployeeService , private router: Router) { }

  ngOnInit(): void {
  }
   signIn(){ 

    this.empServer.getid(this.signInInfo.value).subscribe((result : string)=>{
     
      if(result!=="null"){
        const resultString = JSON.stringify(result)
        const resultObj = JSON.parse(resultString)
        console.log(resultObj)
        sessionStorage.setItem("employee",resultObj._id)
        sessionStorage.setItem("name",resultObj.firstName)
        this.router.navigate(["empDash"])
      }
      else{
        this.message = "Invalid Login Credentials";
      }
    },(error:string)=>this.message=error);  

    
  }   

}
