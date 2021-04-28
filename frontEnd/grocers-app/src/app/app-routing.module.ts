import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { InitComponent } from './init/init.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { UpdateProductPriceComponent } from './update-product-price/update-product-price.component';
import { UpdateProductQuantityComponent } from './update-product-quantity/update-product-quantity.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},
  {path: "\addProduct", component: AddProductComponent},
  {path: "retrieveProducts", component: RetrieveProductComponent},
  {path: "\deleteProduct", component: DeleteProductComponent},
  {path: "updatePrice", component: UpdateProductPriceComponent},
  {path: "updateQuantity", component: UpdateProductQuantityComponent},
  {path:"\empDash", component: EmployeeDashboardComponent}, // Employee - Dashboard
  {path:"\empReq", component: EmployeeRequestComponent} // Employee - Send Request
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
