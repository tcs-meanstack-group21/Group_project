import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  uid: string = "-1";

  products: Product[] = [];
  storeColumns = ["ID", "Price", "Name", "Add", "Remove"];

  cart: any = {};
  cartProducts: Product[] = [];
  cartColumns = ["Quantity", "Price", "Name", "Remove"];

  constructor(private route: ActivatedRoute, private custSer: CustomerService, private prodSer: ProductService) { }

  ngOnInit(): void {
      this.uid = sessionStorage.getItem("customer") || "-1";
      this.custSer.getCart(this.uid).subscribe(data => { this.cart = data.cart; this.cartProducts = data.result });
      this.prodSer.retrieveProductDetails().subscribe(data => this.products = data);
  }

  checkoutUser(): void {
    this.custSer.checkout(this.uid).subscribe(data => console.log(data));
    this.cartProducts = [];
    this.cart = {};
  }

  addProduct(product: any): void {
    if(this.cart[product._id] + 1 > product.quantity) { //prevent user from taking more than available
      return;
    }
    if (this.cart[product._id]) this.cart[product._id] += 1;
    else {
      this.cartProducts.push(product);
      console.log(this.cartProducts)
      this.cart[product._id] = 1;
    }
    this.custSer.addProductToCart(this.uid, product._id, 1).subscribe(data => console.log(data));
  }

  removeProduct(product: any): void {
    delete this.cart[product._id];
    this.cartProducts = this.cartProducts.filter((value) => value != product)
    this.custSer.removeProductFromCart(this.uid, product._id).subscribe(data => console.log(data));
  }

  getTotalPrice() {
    let total: number = 0;
    for(let product of this.cartProducts) {
      total += product.price * this.cart[product._id];
    }
    return total;
  }

}
