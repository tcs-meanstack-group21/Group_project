import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-product',
  templateUrl: './retrieve-product.component.html',
  styleUrls: ['./retrieve-product.component.css']
})
export class RetrieveProductComponent implements OnChanges {

  @Input() products?:Array<Product>
  constructor(public proService:ProductService) { }

  ngOnChanges(): void {
    this.proService.retrieveProductDetails().subscribe(result=>this.products=result)
  }

}
