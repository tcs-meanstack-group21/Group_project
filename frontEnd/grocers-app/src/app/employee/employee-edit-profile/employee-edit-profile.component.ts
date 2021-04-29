import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.css']
})
export class EmployeeEditProfileComponent implements OnInit {
  appearAlert:boolean = false;
  submitMsg?:string;

  editProfileForm = new FormGroup({
    uid : new FormControl(),
    cpass : new FormControl(),
    npass : new FormControl()
  })
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }


  sendProfile( profileRef: any ) {
    console.log(profileRef);

    this.empService.updateProfile(profileRef).subscribe( (result:string) => this.submitMsg = result, (error:string) => this.submitMsg = error );
    this.appearAlert = true;
  }
}
