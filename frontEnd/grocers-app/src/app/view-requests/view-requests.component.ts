import { Component, OnChanges, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import {Request} from '../model.request';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements  OnInit, OnChanges {

  requests?:Array<Request>;
  constructor(public reqService:RequestService) { }

  ngOnInit(): void {
    this.reqService.retrieveRequests().subscribe(result=>this.requests=result)
  }

  ngOnChanges(): void{
    this.reqService.retrieveRequests().subscribe(result=>this.requests=result)
  }
}
