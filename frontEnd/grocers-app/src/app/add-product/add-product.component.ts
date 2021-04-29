import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products?:Array<Product>
  addMsg?:string;

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  addProduct(productRef:any){
    this.proService.addProductDetails(productRef)
      .subscribe((result:string)=>this.addMsg=result,(error:string)=>this.addMsg=error);
      this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }
}
