import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  deleteMsg?:string;

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  deleteProductByName(nameRef:any){
    // console.log("Name is "+nameRef);
    this.proService.deleteProductByName(nameRef)
      .subscribe((result:string)=>this.deleteMsg=result,(error:string)=>this.deleteMsg=error)
  }

}
