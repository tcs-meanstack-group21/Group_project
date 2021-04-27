import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(productRef:any){
    console.log(productRef);
    this.proService.appProductDetails(productRef);
  }
}
