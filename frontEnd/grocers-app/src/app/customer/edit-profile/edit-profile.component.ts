import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  
  editFormGroup = new FormGroup({
    email : new FormControl(),
    street : new FormControl(),
    aptUnit : new FormControl(),
    city : new FormControl(),
    state : new FormControl()
  })

  message?:string;

  constructor(private custSer : CustomerService) { }

  ngOnInit(): void {
  }
  edit(){
    this.custSer.updatePro(this.editFormGroup.value)
    this.message = this.custSer.message
  }
}
