import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { EmpSignInComponent } from './emp-sign-in/emp-sign-in.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ 
    AppComponent,
    SignUpComponent,
    SignUpPageComponent,
    InitComponent,
    EmployeeDashboardComponent,
    EmployeeRequestComponent,
    EmpSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
