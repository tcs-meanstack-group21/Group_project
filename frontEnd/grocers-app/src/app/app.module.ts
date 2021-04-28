import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App, HTTP and Routing Components
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';

// Inital & Login Components
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { InitComponent } from './init/init.component';

// Product Components
import { AddProductComponent } from './add-product/add-product.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductPriceComponent } from './update-product-price/update-product-price.component';
import { UpdateProductQuantityComponent } from './update-product-quantity/update-product-quantity.component';

// Employee Components
import { EmployeeRequestComponent } from './employee/employee-request/employee-request.component';
import { EmpSignInComponent } from './emp-sign-in/emp-sign-in.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeOrderStatusComponent } from './employee/employee-order-status/employee-order-status.component';
import { EmployeeLockedUsersComponent } from './employee/employee-locked-users/employee-locked-users.component';
import { EmployeeEditProfileComponent } from './employee/employee-edit-profile/employee-edit-profile.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CustDashoardComponent } from './customer/cust-dashoard/cust-dashoard.component';
import { CustSignInComponent } from './customer/cust-sign-in/cust-sign-in.component';


@NgModule({
  declarations: [ 
    AppComponent,
    SignUpComponent,
    SignUpPageComponent,
    InitComponent,
    AddProductComponent,
    RetrieveProductComponent,
    DeleteProductComponent,
    UpdateProductPriceComponent,
    UpdateProductQuantityComponent,
    EmployeeDashboardComponent,
    EmployeeRequestComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    AdminComponent,
    EmployeeOrderStatusComponent,
    EmployeeLockedUsersComponent,
    EmployeeEditProfileComponent,
    EmpSignInComponent,
    CustDashoardComponent,
    CustSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
