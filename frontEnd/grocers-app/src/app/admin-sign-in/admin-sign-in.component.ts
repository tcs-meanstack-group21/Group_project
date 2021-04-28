import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {

  msg?:any

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

  adminSignIn(adminRef:any){
    console.log(adminRef);
    this.adminService.adminSignIn(adminRef)
      .subscribe((result:string)=>this.msg=result,(error:string)=>this.msg=error);
      console.log(this.msg)
  }
  
}
