import { Component,  OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-price',
  templateUrl: './update-product-price.component.html',
  styleUrls: ['./update-product-price.component.css']
})
export class UpdateProductPriceComponent implements OnInit {

  products?:Array<Product>
  updateMsg?:string;

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  updateProductPrice(productRef:any){
    console.log(productRef)
    this.proService.updateProductPrice(productRef)
      .subscribe((result:string)=>this.updateMsg=result,(error:string)=>this.updateMsg=error);
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }
}
