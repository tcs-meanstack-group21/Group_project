import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  products:Array<Product> = [];
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  onTabChanged($event:any){
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  updateProducts(){
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

}
