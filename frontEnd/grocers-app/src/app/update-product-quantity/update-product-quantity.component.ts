import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-quantity',
  templateUrl: './update-product-quantity.component.html',
  styleUrls: ['./update-product-quantity.component.css']
})
export class UpdateProductQuantityComponent implements OnInit {

  products?:Array<Product>
  updateMsg?:string;

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  updateProductQuantity(productRef:any){
    console.log(productRef)
    this.proService.updateProductQuantity(productRef)
      .subscribe((result:string)=>this.updateMsg=result,(error:string)=>this.updateMsg=error);
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

}
