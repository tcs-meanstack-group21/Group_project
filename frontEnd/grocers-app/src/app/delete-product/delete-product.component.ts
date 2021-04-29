import { Component, OnChanges, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit, OnChanges {

  products: Array<Product> = [];
  deleteMsg?:string;

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  ngOnChanges(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

  deleteProductByName(nameRef:any){
    this.proService.deleteProductByName(nameRef)
      .subscribe((result:string)=>this.deleteMsg=result,(error:string)=>this.deleteMsg=error)
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

}
