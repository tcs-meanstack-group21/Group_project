import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { InitComponent } from './init/init.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},
  {path:"\empDash", component: EmployeeDashboardComponent}, // Employee - Dashboard
  {path:"\empReq", component: EmployeeRequestComponent}, // Employee - Send Request
  {path:"\addEmployee", component: AddEmployeeComponent},
  {path:"\deleteEmployee", component: DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
