import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  deleteMsg?:string;
  @Output() updateProducts =new EventEmitter();

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  deleteProductByName(nameRef:any){
    this.proService.deleteProductByName(nameRef)
      .subscribe((result:string)=>this.deleteMsg=result,(error:string)=>this.deleteMsg=error)
    this.updateProducts.emit() 
  }

}
