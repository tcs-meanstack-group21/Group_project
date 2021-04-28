import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { InitComponent } from './init/init.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},
  {path:"\empDash", component: EmployeeDashboardComponent}, // Employee - Dashboard
  {path:"\empReq", component: EmployeeRequestComponent}, // Employee - Send Request
  {path: ":uid/cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
