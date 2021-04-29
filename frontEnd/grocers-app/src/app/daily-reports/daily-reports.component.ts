import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.css']
})
export class DailyReportsComponent implements OnInit {

  resultMsg?:string;
  constructor(public adminService:AdminService) { } 

  ngOnInit(): void {
  }
  searchDetails(dateOrdered:any){
    console.log("Date is "+dateOrdered);
    this.adminService.retrieveOrderByDate(dateOrdered).subscribe(result=> {
      console.log(result)
      if(result?.length>0){
  this.resultMsg="Id is"+result[0]._id+" customer "+result[0].customer+" Cart "+result[0].cart+"date Ordered"+result[0].dateOrdered
                  +"date Delivered"+result[0].dateDelivered+"order Status"+result[0].orderStatus+"Cancellation Reason"+result[0].cancellations;
      }else {
  this.resultMsg="No Orders available";
      }
    }
    );

  }
}
