import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitComponent } from './init/init.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

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
