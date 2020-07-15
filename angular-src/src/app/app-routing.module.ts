/* Modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Services
import { AuthenticateGuard } from './services/authenticate.guard';
/* Components */
// Main Homepage Components
import { HomeComponent } from './components/home/home.component';
// User Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserHomeComponent } from './components/main-components/users/user-home/user-home.component';
// Employee Components
import { EmployeeHomeComponent } from "./components/main-components/employees/employee-home/employee-home.component";
// Purchase Order Components
import { PurchaseOrderHomeComponent } from "./components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component";
// Accountability Components
import { AccountabilityHomeComponent } from "./components/main-components/accountabilities/accountability-home/accountability-home.component";


const routes: Routes = [
  // Home Route
  {path: '', component: HomeComponent},
  // User Routes
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticateGuard]},
  {path: 'dashboard/users', component: UserHomeComponent, canActivate: [AuthenticateGuard]},
  // Employee Routes
  {path: 'dashboard/emps', component: EmployeeHomeComponent, canActivate: [AuthenticateGuard]},
  // Accountability Routes
  {path: 'dashboard/accs', component: AccountabilityHomeComponent, canActivate: [AuthenticateGuard]},
  // Purchase Order Routes
  {path: 'dashboard/pos', component: PurchaseOrderHomeComponent, canActivate: [AuthenticateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
