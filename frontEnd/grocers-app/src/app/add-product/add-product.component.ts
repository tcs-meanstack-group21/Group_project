import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addMsg?:string;

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(productRef:any){
    // console.log(productRef);
    this.proService.addProductDetails(productRef)
      .subscribe((result:string)=>this.addMsg=result,(error:string)=>this.addMsg=error);
  }
}
