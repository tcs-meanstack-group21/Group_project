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

  addProduct(pid: any): void {
    if (this.cart[pid]) this.cart[pid] += 1;
    else this.cart[pid] = 1;
    this.custSer.addProductToCart(this.uid, pid, 1).subscribe(data => console.log(data));
  }

  removeProduct(pid: any): void {
    delete this.cart[pid];
    this.custSer.removeProductFromCart(this.uid, pid).subscribe(data => console.log(data));
  }

}
