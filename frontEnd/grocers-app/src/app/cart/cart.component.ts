import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  uid: string = "0";

  products: Object[] = [{ _id: 1000, price: 1000, name: "Apple", quantity: 10 }];
  storeColumns = ["ID", "Price", "Name", "Add", "Remove"];

  cart: any = {};
  cartProducts: any = [];
  cartColumns = ["Quantity", "Price", "Name", "Remove"];

  constructor(private route: ActivatedRoute, private custSer: CustomerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
      this.custSer.getCart(this.uid).subscribe(data => { this.cart = data.cart; this.cartProducts = data.result })
    })
  }

  checkoutUser(): void {
    console.log("TODO checkout fn")
  }

  addProduct(id: any): void {
    console.log("TODO add product function")
  }

  removeProduct(id: any): void {
    console.log("TODO remove product function")
  }

}
