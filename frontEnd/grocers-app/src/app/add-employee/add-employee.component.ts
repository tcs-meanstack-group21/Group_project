import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

  addEmployee(employeeRef:any){
    console.log(employeeRef);
    this.adminService.addEmployeeInfo(employeeRef);
  }
}
