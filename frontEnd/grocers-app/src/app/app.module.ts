import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { InitComponent } from './init/init.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUpPageComponent,
    InitComponent,
    EmployeeDashboardComponent,
    EmployeeRequestComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
