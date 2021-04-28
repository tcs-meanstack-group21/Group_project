import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteMsg?:string;
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    console.log("id is "+id);
    this.adminService.deleteEmployeeById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
}
