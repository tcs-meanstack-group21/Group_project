import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-quantity',
  templateUrl: './update-product-quantity.component.html',
  styleUrls: ['./update-product-quantity.component.css']
})
export class UpdateProductQuantityComponent implements OnInit {

  updateMsg?:string;
  @Output() updateProducts =new EventEmitter();

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  updateProductQuantity(productRef:any){
    console.log(productRef)
    this.proService.updateProductQuantity(productRef)
      .subscribe((result:string)=>this.updateMsg=result,(error:string)=>this.updateMsg=error);
    this.updateProducts.emit() 
  }

}
