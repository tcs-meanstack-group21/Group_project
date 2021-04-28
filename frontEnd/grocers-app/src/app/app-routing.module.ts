import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSignInComponent } from './emp-sign-in/emp-sign-in.component';

// Inital & Login Routes
import { InitComponent } from './init/init.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

//Product App Routes
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductPriceComponent } from './update-product-price/update-product-price.component';
import { UpdateProductQuantityComponent } from './update-product-quantity/update-product-quantity.component';

//Employee App Routes
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeEditProfileComponent } from './employee/employee-edit-profile/employee-edit-profile.component';
import { EmployeeLockedUsersComponent } from './employee/employee-locked-users/employee-locked-users.component';
import { EmployeeOrderStatusComponent } from './employee/employee-order-status/employee-order-status.component';
import { EmployeeRequestComponent } from './employee/employee-request/employee-request.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},

  
  {path: "\addProduct", component: AddProductComponent},
  {path: "retrieveProducts", component: RetrieveProductComponent},
  {path: "\deleteProduct", component: DeleteProductComponent},
  {path: "updatePrice", component: UpdateProductPriceComponent},
  {path: "updateQuantity", component: UpdateProductQuantityComponent},
  
  {path: "\empSignIn", component : EmpSignInComponent}, // Employee - Sign In
  {path:"\empDash", component: EmployeeDashboardComponent}, // Employee - Dashboard
  {path:"\empReq", component: EmployeeRequestComponent}, // Employee - Send Request
  {path:"\empOrd", component: EmployeeOrderStatusComponent}, // Employee - Update Order Status
  {path:"\empLock", component: EmployeeLockedUsersComponent}, // Employee - Locked Users
  {path:"\empEdit", component: EmployeeEditProfileComponent} // Employee - Edit Profile
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
