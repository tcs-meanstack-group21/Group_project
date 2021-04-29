import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {

  msg?:any

  constructor(public adminService:AdminService, public router:Router) { }

  ngOnInit(): void {
  }

  adminSignIn(adminRef:any){
    console.log(adminRef);
    this.adminService.adminSignIn(adminRef)
      .subscribe((result:string)=>{
        this.msg=result
        if(this.msg!=="null"){
          this.router.navigate(["../adminHome"])
          console.log("Admin Login Successful")
        }
        else{
          this.msg = "Invalid Login Credentials"
          console.log(this.msg)
        }
      },(error:string)=>this.msg=error);  
  }
  
}
