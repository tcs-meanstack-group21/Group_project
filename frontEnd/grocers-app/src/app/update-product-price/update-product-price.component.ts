import { Component,  OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-price',
  templateUrl: './update-product-price.component.html',
  styleUrls: ['./update-product-price.component.css']
})
export class UpdateProductPriceComponent implements OnInit {

  updateMsg?:string;
  @Output() updateProducts =new EventEmitter();

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  updateProductPrice(productRef:any){
    console.log(productRef)
    this.proService.updateProductPrice(productRef)
      .subscribe((result:string)=>this.updateMsg=result,(error:string)=>this.updateMsg=error);
    this.updateProducts.emit() 
  }
}
