import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Modules */
// JwtHelper
import { JwtModule } from '@auth0/angular-jwt';

// BsDatepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Flash Messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material-module/material.module";

// Main Homepage Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/* Components */
// User Components
import { UserHomeComponent } from './components/main-components/users/user-home/user-home.component';
import { UserEditComponent } from './components/main-components/users/user-edit/user-edit.component';
import { LoginComponent } from './components/main-components/users/login/login.component';
import { RegisterComponent } from './components/main-components/users/register/register.component';

// Employee Components
import { EmployeeHomeComponent } from './components/main-components/employees/employee-home/employee-home.component';
import { EmployeeAddEditComponent } from './components/main-components/employees/employee-add-edit/employee-add-edit.component';

// Purchase Order Components
import { PurchaseOrderHomeComponent } from './components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component';
import { PurchaseOrderAddEditComponent } from './components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component';
import { PurchaseOrderAddItemComponent } from './components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component';

// Accountability Components
import { AccountabilityHomeComponent } from './components/main-components/accountabilities/accountability-home/accountability-home.component';
import { AccountabilityAddEditComponent } from './components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component';

// Services
import { EmployeeService } from "./services/employee.service";
import { AccountabilityService } from "./services/accountability.service";
import { PurchaseOrderService } from "./services/purchase-order.service";
import { UserService } from "./services/user.service";
import { AuthenticateService } from "./services/authenticate.service";
import { ExportService } from "./services/export.service";
import { AuthenticateGuard } from './services/authenticate.guard';

export function tokenGetter() { return localStorage.getItem('key_id'); }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    // User Declarations
    UserHomeComponent,
    UserEditComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,

    // Employee Declarations
    EmployeeHomeComponent,
    EmployeeAddEditComponent,

    // Accoutability Declarations
    AccountabilityHomeComponent,
    AccountabilityAddEditComponent,

    // PO Declarations
    PurchaseOrderHomeComponent,
    PurchaseOrderAddEditComponent,
    PurchaseOrderAddItemComponent
  ],

  imports: [
    // Essentials
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // JwtHelper
    JwtModule.forRoot({ config: { tokenGetter: tokenGetter } }),

    // Flash Messages
    FlashMessagesModule.forRoot(),
    
    // Angular Material
    BrowserAnimationsModule,
    MaterialModule,
    
    // BsDatepicker
    BsDatepickerModule.forRoot(),
  ],

  providers: [
    EmployeeService,
    AccountabilityService,
    PurchaseOrderService,
    UserService,
    ExportService,
    AuthenticateService,
    AuthenticateGuard
  ],

  entryComponents: [
    EmployeeAddEditComponent,
    AccountabilityAddEditComponent,
    PurchaseOrderAddEditComponent,
    PurchaseOrderAddItemComponent,
    UserEditComponent,
    LoginComponent,
    RegisterComponent
  ],

  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
