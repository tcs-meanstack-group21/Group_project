import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSignInComponent } from './emp-sign-in/emp-sign-in.component';

// Inital & Login Routes
import { InitComponent } from './init/init.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

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
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { CustSignInComponent } from './customer/cust-sign-in/cust-sign-in.component';
import { CustDashoardComponent } from './customer/cust-dashoard/cust-dashoard.component';

//Customer Routes
import { CartComponent } from './cart/cart.component';
import { AddFundsComponent } from './customer/add-funds/add-funds.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { CustOrderStatusComponent } from './customer/cust-order-status/cust-order-status.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},
  {path: "\dailyReports", component: DailyReportsComponent},
  {path: "\custSignIn", component: CustSignInComponent},
  {path: "\custDash",component:CustDashoardComponent},
  {path: "\addFunds", component:AddFundsComponent},
  {path: "\editProfile", component:EditProfileComponent},
  {path: "\orderStatus", component: CustOrderStatusComponent},

  {path: "", redirectTo : "\init", pathMatch:"full"},
  
  {path: "\addProduct", component: AddProductComponent},
  {path: "retrieveProducts", component: RetrieveProductComponent},
  {path: "\deleteProduct", component: DeleteProductComponent},
  {path: "updatePrice", component: UpdateProductPriceComponent},
  {path: "updateQuantity", component: UpdateProductQuantityComponent},
  
  {path: "\empSignIn", component : EmpSignInComponent}, // Employee - Sign In
  {path:"\empDash", component: EmployeeDashboardComponent}, // Employee - Dashboard
  {path:"\empReq", component: EmployeeRequestComponent}, // Employee - Send Request
  {path:"\addEmployee", component: AddEmployeeComponent},
  {path:"\deleteEmployee", component: DeleteEmployeeComponent},
  {path:"\empOrd", component: EmployeeOrderStatusComponent}, // Employee - Update Order Status
  {path:"\empLock", component: EmployeeLockedUsersComponent}, // Employee - Locked Users
  {path:"\empEdit", component: EmployeeEditProfileComponent}, // Employee - Edit Profile

  {path: "", redirectTo : "\init", pathMatch:"full"},
  
  {path: "customer/cart", component: CartComponent},
  {path: "ticket", component: RaiseTicketComponent},
  
  {path:"\adminHome", component: AdminComponent},
  {path:"\adminSignIn", component: AdminSignInComponent},
  {path:"viewRequests", component: ViewRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
