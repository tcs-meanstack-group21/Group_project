import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSignInComponent } from './emp-sign-in/emp-sign-in.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { InitComponent } from './init/init.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},
  {path: "\empSignIn", component : EmpSignInComponent},
  {path:"\empDash", component: EmployeeDashboardComponent}, // Employee - Dashboard
  {path:"\empReq", component: EmployeeRequestComponent} // Employee - Send Request
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
