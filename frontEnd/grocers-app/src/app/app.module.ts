import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
// Neutral Components
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { InitComponent } from './init/init.component';

// Employee Components
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeRequestComponent } from './employee/employee-request/employee-request.component';
import { EmployeeOrderStatusComponent } from './employee/employee-order-status/employee-order-status.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUpPageComponent,
    InitComponent,
    EmployeeDashboardComponent,
    EmployeeRequestComponent,
    EmployeeOrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
