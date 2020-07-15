(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authenticate.guard */ "./src/app/services/authenticate.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_main_components_users_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main-components/users/user-home/user-home.component */ "./src/app/components/main-components/users/user-home/user-home.component.ts");
/* harmony import */ var _components_main_components_employees_employee_home_employee_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-components/employees/employee-home/employee-home.component */ "./src/app/components/main-components/employees/employee-home/employee-home.component.ts");
/* harmony import */ var _components_main_components_purchase_orders_purchase_order_home_purchase_order_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component */ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.ts");
/* harmony import */ var _components_main_components_accountabilities_accountability_home_accountability_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main-components/accountabilities/accountability-home/accountability-home.component */ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.ts");

/* Modules */



// Services

/* Components */
// Main Homepage Components

// User Components


// Employee Components

// Purchase Order Components

// Accountability Components

var routes = [
    // Home Route
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    // User Routes
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_services_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticateGuard"]] },
    { path: 'dashboard/users', component: _components_main_components_users_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_7__["UserHomeComponent"], canActivate: [_services_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticateGuard"]] },
    // Employee Routes
    { path: 'dashboard/emps', component: _components_main_components_employees_employee_home_employee_home_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeHomeComponent"], canActivate: [_services_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticateGuard"]] },
    // Accountability Routes
    { path: 'dashboard/accs', component: _components_main_components_accountabilities_accountability_home_accountability_home_component__WEBPACK_IMPORTED_MODULE_10__["AccountabilityHomeComponent"], canActivate: [_services_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticateGuard"]] },
    // Purchase Order Routes
    { path: 'dashboard/pos', component: _components_main_components_purchase_orders_purchase_order_home_purchase_order_home_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseOrderHomeComponent"], canActivate: [_services_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticateGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<br>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'provinventory';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_material_module_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/material-module/material.module */ "./src/app/modules/material-module/material.module.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_main_components_users_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main-components/users/user-home/user-home.component */ "./src/app/components/main-components/users/user-home/user-home.component.ts");
/* harmony import */ var _components_main_components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/main-components/users/user-edit/user-edit.component */ "./src/app/components/main-components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _components_main_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main-components/users/login/login.component */ "./src/app/components/main-components/users/login/login.component.ts");
/* harmony import */ var _components_main_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main-components/users/register/register.component */ "./src/app/components/main-components/users/register/register.component.ts");
/* harmony import */ var _components_main_components_employees_employee_home_employee_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main-components/employees/employee-home/employee-home.component */ "./src/app/components/main-components/employees/employee-home/employee-home.component.ts");
/* harmony import */ var _components_main_components_employees_employee_add_edit_employee_add_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main-components/employees/employee-add-edit/employee-add-edit.component */ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.ts");
/* harmony import */ var _components_main_components_purchase_orders_purchase_order_home_purchase_order_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component */ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.ts");
/* harmony import */ var _components_main_components_purchase_orders_purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.ts");
/* harmony import */ var _components_main_components_purchase_orders_purchase_order_add_edit_purchase_order_add_item_purchase_order_add_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.ts");
/* harmony import */ var _components_main_components_accountabilities_accountability_home_accountability_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/main-components/accountabilities/accountability-home/accountability-home.component */ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.ts");
/* harmony import */ var _components_main_components_accountabilities_accountability_add_edit_accountability_add_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component */ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_accountability_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/accountability.service */ "./src/app/services/accountability.service.ts");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/export.service */ "./src/app/services/export.service.ts");
/* harmony import */ var _services_authenticate_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/authenticate.guard */ "./src/app/services/authenticate.guard.ts");







/* Modules */
// JwtHelper

// BsDatepicker

// Flash Messages

// Angular Material Modules


// Main Homepage Components



/* Components */
// User Components




// Employee Components


// Purchase Order Components



// Accountability Components


// Services







function tokenGetter() { return localStorage.getItem('key_id'); }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                // User Declarations
                _components_main_components_users_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_15__["UserHomeComponent"],
                _components_main_components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_16__["UserEditComponent"],
                _components_main_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_main_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                // Employee Declarations
                _components_main_components_employees_employee_home_employee_home_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeHomeComponent"],
                _components_main_components_employees_employee_add_edit_employee_add_edit_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeAddEditComponent"],
                // Accoutability Declarations
                _components_main_components_accountabilities_accountability_home_accountability_home_component__WEBPACK_IMPORTED_MODULE_24__["AccountabilityHomeComponent"],
                _components_main_components_accountabilities_accountability_add_edit_accountability_add_edit_component__WEBPACK_IMPORTED_MODULE_25__["AccountabilityAddEditComponent"],
                // PO Declarations
                _components_main_components_purchase_orders_purchase_order_home_purchase_order_home_component__WEBPACK_IMPORTED_MODULE_21__["PurchaseOrderHomeComponent"],
                _components_main_components_purchase_orders_purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseOrderAddEditComponent"],
                _components_main_components_purchase_orders_purchase_order_add_edit_purchase_order_add_item_purchase_order_add_item_component__WEBPACK_IMPORTED_MODULE_23__["PurchaseOrderAddItemComponent"]
            ],
            imports: [
                // Essentials
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // JwtHelper
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({ config: { tokenGetter: tokenGetter } }),
                // Flash Messages
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesModule"].forRoot(),
                // Angular Material
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _modules_material_module_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                // BsDatepicker
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ],
            providers: [
                _services_employee_service__WEBPACK_IMPORTED_MODULE_26__["EmployeeService"],
                _services_accountability_service__WEBPACK_IMPORTED_MODULE_27__["AccountabilityService"],
                _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_28__["PurchaseOrderService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"],
                _services_export_service__WEBPACK_IMPORTED_MODULE_31__["ExportService"],
                _services_authenticate_service__WEBPACK_IMPORTED_MODULE_30__["AuthenticateService"],
                _services_authenticate_guard__WEBPACK_IMPORTED_MODULE_32__["AuthenticateGuard"]
            ],
            entryComponents: [
                _components_main_components_employees_employee_add_edit_employee_add_edit_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeAddEditComponent"],
                _components_main_components_accountabilities_accountability_add_edit_accountability_add_edit_component__WEBPACK_IMPORTED_MODULE_25__["AccountabilityAddEditComponent"],
                _components_main_components_purchase_orders_purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseOrderAddEditComponent"],
                _components_main_components_purchase_orders_purchase_order_add_edit_purchase_order_add_item_purchase_order_add_item_component__WEBPACK_IMPORTED_MODULE_23__["PurchaseOrderAddItemComponent"],
                _components_main_components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_16__["UserEditComponent"],
                _components_main_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_main_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  margin: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"display-3\" style=\"font-weight: 400\">\n      <img src=\"../../../assets/logo.png\" height=\"80px\" width=\"80px\">Welcome to your Dashboard!\n    </h1>\n    <p>This is your dashboard. Click the button below or links at the navigation bar where you want to go.</p>\n    <hr>\n    <p>\n      <a class=\"btn btn-info btn-default\" [routerLink] = \"['/dashboard/users']\" role=\"button\">Users</a>\n      <a class=\"btn btn-secondary btn-default\" [routerLink] = \"['/dashboard/emps']\" role=\"button\">Employees</a>\n      <a class=\"btn btn-info btn-default\" [routerLink] = \"['/dashboard/pos']\" role=\"button\">Purchase Orders</a>\n      <a class=\"btn btn-secondary btn-default\" [routerLink] = \"['/dashboard/accs']\" role=\"button\">Accountabilities</a>\n    </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  margin-right: 5px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"display-3\" style=\"font-weight: 400\">\n      <img src=\"../../../assets/logo.png\" height=\"80px\" width=\"80px\"> ProV Inventory\n    </h1>\n    <p>\n      An OJT Project for solving the hassle of alt-tabbing.\n    </p>\n    <hr>\n    <p>\n      <button (click)=\"onLogin()\" class=\"btn btn-info\">Login</button>\n        <span class=\"button-separator\"></span>\n      <button (click)=\"onRegister()\" class=\"btn btn-secondary\">Register</button>\n    </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _main_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-components/users/login/login.component */ "./src/app/components/main-components/users/login/login.component.ts");
/* harmony import */ var _main_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-components/users/register/register.component */ "./src/app/components/main-components/users/register/register.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, userServices) {
        this.dialog = dialog;
        this.userServices = userServices;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onLogin = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = "308px";
        dialogConfig.width = "623px";
        this.dialog.open(_main_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.userServices.LoginForm.reset();
        });
    };
    HomeComponent.prototype.onRegister = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        this.dialog.open(_main_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            if (_this.userServices.UserForm.invalid == true) {
                _this.userServices.UserForm.reset();
            }
            else {
                _this.userServices.UserForm.reset();
                _this.onLogin();
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-separator {\r\n    margin-left: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvYWNjb3VudGFiaWxpdGllcy9hY2NvdW50YWJpbGl0eS1hZGQtZWRpdC9hY2NvdW50YWJpbGl0eS1hZGQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvYWNjb3VudGFiaWxpdGllcy9hY2NvdW50YWJpbGl0eS1hZGQtZWRpdC9hY2NvdW50YWJpbGl0eS1hZGQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwLXNlcGFyYXRvciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h2 class=\"page-header\">{{accountabilityServices.AccountabilityForm.controls._id.value ? \"Edit Accountability Record\" : \"New Accountability Record\"}}</h2>\n\n  <hr>\n\n  <form [formGroup]=\"accountabilityServices.AccountabilityForm\" (submit)=\"onSubmit()\">\n    <input type=\"hidden\" name=\"id\" formControlName = \"_id\">\n    <input type=\"hidden\" name=\"__v\" formControlName = \"__v\">\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ID\">Accountability ID</label>\n          <input type=\"text\" formControlName=\"Acc_ID\" name=\"Acc_ID\" class=\"form-control\" placeholder=\"EG. ACC-YYYY-MM-###\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('Acc_ID').errors && (accountabilityServices.AccountabilityForm.controls.Acc_ID.touched || accountabilityServices.AccountabilityForm.controls.Acc_ID.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('Acc_ID').errors\" class=\"invalid-feedback\">Pattern must be 'ACC-YYYY-MM-###'</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_DateIssued\">Date Issued <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_date_i\" name=\"Acc_DateIssued\" bsDatepicker [bsConfig]=\"{adaptivePosition: true}\" class=\"form-control\" placeholder=\"MM/DD/YYYY\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_date_i').errors && (accountabilityServices.AccountabilityForm.controls.acc_date_i.touched || accountabilityServices.AccountabilityForm.controls.acc_date_i.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_date_i').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_DateReturned\">Date Returned</label>\n          <input type=\"text\" formControlName=\"acc_date_r\" name=\"Acc_DateReturned\" bsDatepicker [bsConfig]=\"{adaptivePosition: true}\" class=\"form-control\" placeholder=\"MM/DD/YYYY\"> \n        </div>\n      </div>\n\n    </div>\n    \n    <div class=\"row\">\n      \n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ReceiverLastname\">Last Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_rcvr_lname\" name=\"Acc_ReceiverLastname\" class=\"form-control\" placeholder=\"Last name\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_rcvr_lname').errors && (accountabilityServices.AccountabilityForm.controls.acc_rcvr_lname.touched || accountabilityServices.AccountabilityForm.controls.acc_rcvr_lname.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_rcvr_lname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ReceiverFirstname\">Given Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_rcvr_fname\" name=\"Acc_ReceiverFirstname\" class=\"form-control\" placeholder=\"Given Name\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_rcvr_fname').errors && (accountabilityServices.AccountabilityForm.controls.acc_rcvr_fname.touched || accountabilityServices.AccountabilityForm.controls.acc_rcvr_fname.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_rcvr_fname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ReceiverMiddlename\">Middle Name</label>\n          <input type=\"text\" formControlName=\"acc_rcvr_mname\" name=\"Acc_ReceiverMiddlename\" class=\"form-control\" placeholder=\"Middle Name\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-5\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ReceiverLocation\">Location</label>\n          <input type=\"text\" formControlName=\"acc_rcvr_loc\" name=\"acc_rcvr_loc\" class=\"form-control\" placeholder=\"EG. Workstation/VP Room/etc\">\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ReceiverDepartment\">Group/Department <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_rcvr_dept\" name=\"Acc_ReceiverDepartment\" class=\"form-control\" placeholder=\"EG. IT/HR/etc\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_rcvr_dept').errors && (accountabilityServices.AccountabilityForm.controls.acc_rcvr_dept.touched || accountabilityServices.AccountabilityForm.controls.acc_rcvr_dept.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_rcvr_dept').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ReceiverCellphoneNumber\">Contact Number</label>\n          <input type=\"text\" formControlName=\"acc_rcvr_cn\" name=\"acc_rcvr_cn\" class=\"form-control\" placeholder=\"Enter your contact number\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_rcvr_cn').errors && (accountabilityServices.AccountabilityForm.controls.acc_rcvr_cn.touched || accountabilityServices.AccountabilityForm.controls.acc_rcvr_cn.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_rcvr_cn').errors?.pattern\" class=\"invalid-feedback\">Numbers only please.</div>\n        </div>\n      </div>\n\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Acc_BurrowedItemName\">Name of borrowed item <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_i_name\" name=\"acc_i_name\" class=\"form-control\" placeholder=\"EG. Lenovo ThinkPad T440p\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_i_name').errors && (accountabilityServices.AccountabilityForm.controls.acc_i_name.touched || accountabilityServices.AccountabilityForm.controls.acc_i_name.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_i_name').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ItemClassification\">Item Classification <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_i_clss\" name=\"acc_i_clss\" class=\"form-control\" placeholder=\"EG. Laptop/Mouse/etc\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_i_clss').errors && (accountabilityServices.AccountabilityForm.controls.acc_i_clss.touched || accountabilityServices.AccountabilityForm.controls.acc_i_clss.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_i_clss').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ItemTagNumber\">Tag Number <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_i_tnum\" name=\"Acc_ItemTagNumber\" class=\"form-control\" placeholder=\"Type 'n/a' if blank\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_i_tnum').errors && (accountabilityServices.AccountabilityForm.controls.acc_i_tnum.touched || accountabilityServices.AccountabilityForm.controls.acc_i_tnum.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_i_tnum').errors\" class=\"invalid-feedback\">This field is required! Type \"n/a\" if there's no value.</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ItemSerialNumber\">Serial Number <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_i_ser\" name=\"Acc_ItemSerialNumber\" class=\"form-control\" placeholder=\"Type 'n/a' if blank\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_i_ser').errors && (accountabilityServices.AccountabilityForm.controls.acc_i_ser.touched || accountabilityServices.AccountabilityForm.controls.acc_i_ser.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_i_ser').errors\" class=\"invalid-feedback\">This field is required! Type \"n/a\" if there's no value.</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-1\">\n        <div class=\"form-group\">\n          <label for=\"Acc_ItemQuantity\">Qty <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"acc_i_count\" name=\"Acc_ItemQuantity\" class=\"form-control\" placeholder=\"HM?\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('acc_i_count').errors && (accountabilityServices.AccountabilityForm.controls.acc_i_count.touched || accountabilityServices.AccountabilityForm.controls.acc_i_count.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_i_count').errors?.required\" class=\"invalid-feedback\">This field is required!</div>\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('acc_i_count').errors?.pattern\" class=\"invalid-feedback\">Numbers only please.</div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Acc_PO_ID\">Purchase Order ID</label>\n          <input type=\"text\" formControlName=\"Acc_PO_ID\" name=\"Acc_PO_ID\" class=\"form-control\" placeholder=\"EG. IT-YYYY-MM-#\"\n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('Acc_PO_ID').errors && (accountabilityServices.AccountabilityForm.controls.Acc_PO_ID.touched || accountabilityServices.AccountabilityForm.controls.Acc_PO_ID.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('Acc_PO_ID').errors?.pattern\" class=\"invalid-feedback\">Pattern must be 'IT-YYYY-MM-#'</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Acc_PO_SupplierName\">Name of Supplier <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" formControlName=\"Acc_PO_SupplierName\" name=\"Acc_PO_SupplierName\" class=\"form-control\" placeholder=\"EG. ABC Corp\" \n          [ngClass]=\"{'is-invalid' : accountabilityServices.AccountabilityForm.get('Acc_PO_SupplierName').errors && (accountabilityServices.AccountabilityForm.controls.Acc_PO_SupplierName.touched || accountabilityServices.AccountabilityForm.controls.Acc_PO_SupplierName.dirty)}\">\n          <div *ngIf=\"accountabilityServices.AccountabilityForm.get('Acc_PO_SupplierName').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Acc_InvoiceNumber\">Invoice Number</label>\n          <input type=\"text\" formControlName=\"Acc_InvoiceNumber\" name=\"Acc_InvoiceNumber\" class=\"form-control\" placeholder=\"EG. ########\">\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Acc_Remarks\">Remarks</label>\n          <input type=\"text\" formControlName=\"acc_i_remarks\" name=\"acc_i_remarks\" class=\"form-control\" placeholder=\"Comments, etc., ...\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-1\">\n        <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"accountabilityServices.AccountabilityForm.invalid\" value=\"Submit\">\n      </div>\n\n      <div class=\"col-sm-5\">\n        <small class=\"form-text\" style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n      </div>\n\n    </div>\n    \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AccountabilityAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountabilityAddEditComponent", function() { return AccountabilityAddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_accountability_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/accountability.service */ "./src/app/services/accountability.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var AccountabilityAddEditComponent = /** @class */ (function () {
    function AccountabilityAddEditComponent(alert, dialogRef, accountabilityServices) {
        this.alert = alert;
        this.dialogRef = dialogRef;
        this.accountabilityServices = accountabilityServices;
    }
    AccountabilityAddEditComponent.prototype.ngOnInit = function () {
    };
    // WHEN 'SUBMIT' IS CLICKED
    AccountabilityAddEditComponent.prototype.onSubmit = function () {
        var _this = this;
        /* ADD & EDIT FUNCTIONALITY */
        // ON ADD
        if (!this.accountabilityServices.AccountabilityForm.get('_id').value) {
            this.accountabilityServices.addNewAccountabilityRecord(this.accountabilityServices.AccountabilityForm.value).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.closePopUpAfterSubmit();
                }
                else {
                    _this.closePopUpAfterSubmit();
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
            // ON EDIT
        }
        else {
            this.accountabilityServices.editAccountabilityRecord(this.accountabilityServices.AccountabilityForm.value).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.closePopUpAfterSubmit();
                }
                else {
                    _this.closePopUpAfterSubmit();
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
        }
    };
    // After successful submit, popup form will close
    AccountabilityAddEditComponent.prototype.closePopUpAfterSubmit = function () {
        this.accountabilityServices.AccountabilityForm.reset();
        this.dialogRef.close();
    };
    AccountabilityAddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accountability-add-edit',
            template: __webpack_require__(/*! ./accountability-add-edit.component.html */ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./accountability-add-edit.component.css */ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_accountability_service__WEBPACK_IMPORTED_MODULE_3__["AccountabilityService"]])
    ], AccountabilityAddEditComponent);
    return AccountabilityAddEditComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table */\r\ntable {\r\n    padding: 0px;\r\n    width: 100%;\r\n    min-width: 2000px;\r\n}\r\n/* table headers */\r\nth.mat-header-cell {\r\n    text-align: center;\r\n}\r\n/* table cells */\r\ntd.mat-cell {\r\n    text-align: center;\r\n}\r\n/* table row hovering */\r\ntr.element-row:hover {\r\n    background: #f5f5f5;\r\n}\r\n/* horizontal scroll */\r\n.container {\r\n    padding: 0px;\r\n    overflow-x: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvYWNjb3VudGFiaWxpdGllcy9hY2NvdW50YWJpbGl0eS1ob21lL2FjY291bnRhYmlsaXR5LWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1Y7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLGdCQUFnQjtBQUNoQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tY29tcG9uZW50cy9hY2NvdW50YWJpbGl0aWVzL2FjY291bnRhYmlsaXR5LWhvbWUvYWNjb3VudGFiaWxpdHktaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUgKi9cclxudGFibGUge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMDBweDtcclxufVxyXG4vKiB0YWJsZSBoZWFkZXJzICovXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLyogdGFibGUgY2VsbHMgKi9cclxudGQubWF0LWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8qIHRhYmxlIHJvdyBob3ZlcmluZyAqL1xyXG50ci5lbGVtZW50LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi8qIGhvcml6b250YWwgc2Nyb2xsICovXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-sm-3\">\n    <h2 class=\"page-header\">Accountabilities</h2>\n  </div>\n\n  <div class=\"col-sm-7\">\n    <input type=\"text\" matInput (keyup)=\"Search($event.target.value)\" class=\"form-control\" placeholder=\"Search for...\">\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button (click)=\"onAddAccountability()\" class=\"btn btn-info\">Add</button>\n      <span class=\"button-separator\"></span>\n    <button (click)=\"exportAccountabilityRecordToExcel()\" class=\"btn btn-secondary\">Export</button>\n  </div>\n\n</div>\n\n<hr>\n\n<div class=\"container\">\n  <table mat-table [dataSource]=\"AccountablityRecords\">\n\n    <ng-container matColumnDef=\"Accountability_ReceiverLastname\">\n      <th mat-header-cell *matHeaderCellDef> Last Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_rcvr_lname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ReceiverFirstname\">\n      <th mat-header-cell *matHeaderCellDef> Given Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_rcvr_fname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ReceiverMiddlename\">\n      <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_rcvr_mname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ReceiverCellphoneNumber\">\n      <th mat-header-cell *matHeaderCellDef> Cellphone No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_rcvr_cn}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ReceiverDepartment\">\n      <th mat-header-cell *matHeaderCellDef> Department </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_rcvr_dept}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ReceiverLocation\">\n      <th mat-header-cell *matHeaderCellDef> Location </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_rcvr_loc}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_DateIssued\">\n      <th mat-header-cell *matHeaderCellDef> Date Issued </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_date_i | date}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_DateReturned\">\n      <th mat-header-cell *matHeaderCellDef> Date Returned </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_date_r | date}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_BurrowedItemName\">\n      <th mat-header-cell *matHeaderCellDef> Item Burrowed </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ItemClassification\">\n      <th mat-header-cell *matHeaderCellDef> Item Classification </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_clss}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ItemQuantity\">\n      <th mat-header-cell *matHeaderCellDef> Quantity </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_count}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ItemTagNumber\">\n      <th mat-header-cell *matHeaderCellDef> Tag Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_tnum}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ItemSerialNumber\">\n      <th mat-header-cell *matHeaderCellDef> Serial Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_ser}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_Remarks\">\n        <th mat-header-cell *matHeaderCellDef> Remarks </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_remarks}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"Accountability_ID\">\n        <th mat-header-cell *matHeaderCellDef> Accountablity ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Acc_ID}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"Accountability_PO_ID\">\n        <th mat-header-cell *matHeaderCellDef> PO ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Acc_PO_ID}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_PO_SupplierName\">\n        <th mat-header-cell *matHeaderCellDef> Supplier Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Acc_PO_SupplierName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_InvoiceNumber\">\n        <th mat-header-cell *matHeaderCellDef> Invoice Number </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Acc_InvoiceNumber}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"Edit/DeleteButtons\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let acc_row\">\n\n        <button mat-icon-button (click)=\"onEditAccountability(acc_row)\">\n          <mat-icon>update</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"warn\" (click)=\"onDeleteAccountability(acc_row._id)\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"AccountabilityColumns\" class=\"columns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: AccountabilityColumns;\" class=\"element-row\"></tr>\n\n  </table>\n</div>\n  \n<mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\"  [showFirstLastButtons] = \"true\"></mat-paginator>"

/***/ }),

/***/ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AccountabilityHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountabilityHomeComponent", function() { return AccountabilityHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _accountability_add_edit_accountability_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accountability-add-edit/accountability-add-edit.component */ "./src/app/components/main-components/accountabilities/accountability-add-edit/accountability-add-edit.component.ts");
/* harmony import */ var _services_accountability_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/accountability.service */ "./src/app/services/accountability.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/export.service */ "./src/app/services/export.service.ts");









var AccountabilityHomeComponent = /** @class */ (function () {
    function AccountabilityHomeComponent(dialog, alert, exportToExcel, accountablityServices) {
        var _this = this;
        this.dialog = dialog;
        this.alert = alert;
        this.exportToExcel = exportToExcel;
        this.accountablityServices = accountablityServices;
        this.AccountablityRecords = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.AccountabilityColumns = [
            'Accountability_ID',
            'Accountability_DateIssued',
            'Accountability_DateReturned',
            'Accountability_ReceiverLastname',
            'Accountability_ReceiverFirstname',
            'Accountability_ReceiverMiddlename',
            'Accountability_ReceiverCellphoneNumber',
            'Accountability_ReceiverDepartment',
            'Accountability_ReceiverLocation',
            'Accountability_BurrowedItemName',
            'Accountability_ItemClassification',
            'Accountability_ItemQuantity',
            'Accountability_ItemTagNumber',
            'Accountability_ItemSerialNumber',
            'Accountability_PO_ID',
            'Accountability_PO_SupplierName',
            'Accountability_InvoiceNumber',
            'Accountability_Remarks',
            'Edit/DeleteButtons'
        ];
        // READ
        this.getAllAccountabalityRecords = function () {
            _this.accountablityServices.getAllAccountabilityRecords().subscribe(function (result) {
                _this.AccountablityRecords.data = result;
            });
        };
    }
    AccountabilityHomeComponent.prototype.ngOnInit = function () {
        this.getAllAccountabalityRecords();
    };
    // PAGINATOR
    AccountabilityHomeComponent.prototype.ngAfterViewInit = function () {
        this.AccountablityRecords.paginator = this.paginator;
    };
    // SEARCH DATA FUNCTIONALITY
    AccountabilityHomeComponent.prototype.Search = function (value) {
        this.AccountablityRecords.filter = value.trim().toLowerCase();
    };
    // Exports to Excel
    AccountabilityHomeComponent.prototype.exportAccountabilityRecordToExcel = function () {
        this.exportToExcel.exportAccountabilitiesToExcelFile(this.AccountablityRecords.data, 'PROV_Accountabilites');
    };
    /* CRUD Activities */
    // CREATE
    AccountabilityHomeComponent.prototype.onAddAccountability = function () {
        var _this = this;
        this.accountablityServices.initialize();
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = "1092px";
        dialogConfig.height = "583px";
        dialogConfig.autoFocus = true;
        this.dialog.open(_accountability_add_edit_accountability_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AccountabilityAddEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllAccountabalityRecords();
            _this.accountablityServices.AccountabilityForm.reset();
        });
    };
    // UPDATE
    AccountabilityHomeComponent.prototype.onEditAccountability = function (acc_row) {
        var _this = this;
        this.accountablityServices.populate(acc_row);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = "1092px";
        dialogConfig.height = "583px";
        dialogConfig.autoFocus = true;
        this.dialog.open(_accountability_add_edit_accountability_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AccountabilityAddEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllAccountabalityRecords();
        });
    };
    // DELETE
    AccountabilityHomeComponent.prototype.onDeleteAccountability = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this.accountablityServices.deleteAccountabilityRecord(id).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.getAllAccountabalityRecords();
                }
                else {
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AccountabilityHomeComponent.prototype, "paginator", void 0);
    AccountabilityHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accountability-home',
            template: __webpack_require__(/*! ./accountability-home.component.html */ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.html"),
            styles: [__webpack_require__(/*! ./accountability-home.component.css */ "./src/app/components/main-components/accountabilities/accountability-home/accountability-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"],
            _services_export_service__WEBPACK_IMPORTED_MODULE_8__["ExportService"],
            _services_accountability_service__WEBPACK_IMPORTED_MODULE_6__["AccountabilityService"]])
    ], AccountabilityHomeComponent);
    return AccountabilityHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZS1hZGQtZWRpdC9lbXBsb3llZS1hZGQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">{{employeeServices.EmployeeForm.controls._id.value ? \"Edit Employee Record\" : \"New Employee\"}}</h2>\n\n  <hr>\n  \n  <form [formGroup]=\"employeeServices.EmployeeForm\" (submit)=\"onSubmit()\">\n    <input type=\"hidden\" name=\"id\" formControlName = \"_id\">\n    <input type=\"hidden\" name=\"__v\" formControlName = \"__v\">\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-10\">\n        <div class=\"form-group\">\n          <label for=\"Emp_ID\">Employee ID</label>\n          <input type=\"text\" name=\"Emp_ID\" formControlName=\"emp_id\" class=\"form-control\" placeholder=\"Enter employee ID\">\n        </div>\n      </div>\n\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\">\n          <label for=\"Emp_Status\">Status <span class=\"asterisk\">*</span></label>\n          <select name=\"Emp_Status\" formControlName=\"emp_stat\" class=\"custom-select\"\n          [ngClass]=\"{'is-invalid' : employeeServices.EmployeeForm.get('emp_stat').errors && (employeeServices.EmployeeForm.controls.emp_stat.touched || employeeServices.EmployeeForm.controls.emp_stat.dirty)}\">\n            <option value=\"Active\">Active</option>\n            <option value=\"Resigned\">Resigned</option>\n            <option value=\"Pending\">Pending</option>\n          </select>\n          <div *ngIf=\"employeeServices.EmployeeForm.get('emp_stat').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Emp_LastName\">Last Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"Emp_LastName\" formControlName=\"emp_lname\" class=\"form-control\" placeholder=\"Last name\"\n          [ngClass]=\"{'is-invalid' : employeeServices.EmployeeForm.get('emp_lname').errors && (employeeServices.EmployeeForm.controls.emp_lname.touched || employeeServices.EmployeeForm.controls.emp_lname.dirty)}\">\n          <div *ngIf=\"employeeServices.EmployeeForm.get('emp_lname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"Emp_FirstName\">Given Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"Emp_FirstName\" formControlName=\"emp_fname\" class=\"form-control\" placeholder=\"Given name\"\n          [ngClass]=\"{'is-invalid' : employeeServices.EmployeeForm.get('emp_fname').errors && (employeeServices.EmployeeForm.controls.emp_fname.touched || employeeServices.EmployeeForm.controls.emp_fname.dirty)}\">\n          <div *ngIf=\"employeeServices.EmployeeForm.get('emp_fname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"Emp_FirstName\">Middle Name</label>\n          <input type=\"text\" name=\"Emp_MiddleName\" formControlName=\"emp_mname\" class=\"form-control\" placeholder=\"Middle name\">\n        </div>\n      </div>\n\n      <div class=\"col-sm-1\">\n        <div class=\"form-group\">\n          <label for=\"Emp_Suffix\">Suffix</label>\n          <input type=\"text\" name=\"Emp_Suffix\" formControlName=\"emp_sfx\" class=\"form-control\" placeholder=\"SFX\">\n        </div>\n      </div>\n\n    </div>    \n\n    <div class=\"row\">\n\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"Emp_HireDate\">Date Hired <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"Emp_HireDate\" formControlName=\"emp_hdate\" bsDatepicker [bsConfig]=\"{ adaptivePosition: true }\" class=\"form-control\" placeholder=\"MM/DD/YYYY\"\n          [ngClass]=\"{'is-invalid' : employeeServices.EmployeeForm.get('emp_hdate').errors && (employeeServices.EmployeeForm.controls.emp_hdate.touched || employeeServices.EmployeeForm.controls.emp_hdate.dirty)}\">\n          <div *ngIf=\"employeeServices.EmployeeForm.get('emp_hdate').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-md-7\">\n        <div class=\"form-group\">\n          <label for=\"Emp_JobTitle\">Job Title <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"Emp_JobTitle\" formControlName=\"emp_jtitle\" class=\"form-control\" placeholder=\"EG. Software Developer/IT Support/etc.\"\n          [ngClass]=\"{'is-invalid' : employeeServices.EmployeeForm.get('emp_jtitle').errors && (employeeServices.EmployeeForm.controls.emp_jtitle.touched || employeeServices.EmployeeForm.controls.emp_jtitle.dirty)}\">\n          <div *ngIf=\"employeeServices.EmployeeForm.get('emp_jtitle').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label for=\"Emp_Department\">Department <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"Emp_Department\" formControlName=\"emp_dept\" class=\"form-control\" placeholder=\"EG. IT/HR/etc.\"\n          [ngClass]=\"{'is-invalid' : employeeServices.EmployeeForm.get('emp_dept').errors && (employeeServices.EmployeeForm.controls.emp_dept.touched || employeeServices.EmployeeForm.controls.emp_dept.dirty)}\">\n          <div *ngIf=\"employeeServices.EmployeeForm.get('emp_dept').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"Emp_SkypeID\">Skype ID</label>\n          <input type=\"mail\" name=\"Emp_SkypeID\" formControlName=\"emp_skype\" class=\"form-control\" placeholder=\"name@prov.intl.com\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"Emp_DomainLog\">Domain Log</label>\n          <input type=\"text\" name=\"Emp_DomainLog\" formControlName=\"emp_domlog\" class=\"form-control\" placeholder=\"name@prov.intl.com\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"Emp_FingerprintNumber\">Fingerprint ID</label>\n          <input type=\"text\" name=\"Emp_FingerprintNumber\" formControlName=\"emp_fprint\" class=\"form-control\" placeholder=\"Enter fingerprint ID\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"Emp_BadgeID\">Badge ID</label>\n          <input type=\"text\" name=\"Emp_BadgeID\" formControlName=\"emp_badge\" class=\"form-control\" placeholder=\"Enter badge ID\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-1\">\n        <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"employeeServices.EmployeeForm.invalid\" value=\"Submit\">\n      </div>\n\n      <div class=\"col-sm-5\">\n        <small class=\"form-text\" style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n      </div>\n\n    </div>\n    \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EmployeeAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddEditComponent", function() { return EmployeeAddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var EmployeeAddEditComponent = /** @class */ (function () {
    function EmployeeAddEditComponent(alert, dialogRef, employeeServices) {
        this.alert = alert;
        this.dialogRef = dialogRef;
        this.employeeServices = employeeServices;
    }
    EmployeeAddEditComponent.prototype.ngOnInit = function () {
    };
    // When 'SUBMIT' is clicked
    EmployeeAddEditComponent.prototype.onSubmit = function () {
        var _this = this;
        /* ADD & EDIT FUNCTIONALITY */
        // ON ADD
        if (!this.employeeServices.EmployeeForm.get('_id').value) {
            this.employeeServices.addNewEmployeeRecord(this.employeeServices.EmployeeForm.value).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.closePopUpAfterSubmit();
                }
                else {
                    _this.closePopUpAfterSubmit();
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
            // ON EDIT
        }
        else {
            this.employeeServices.editEmployeeRecord(this.employeeServices.EmployeeForm.value).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.closePopUpAfterSubmit();
                }
                else {
                    _this.closePopUpAfterSubmit();
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
        }
    };
    // After successful submit, popup form will close
    EmployeeAddEditComponent.prototype.closePopUpAfterSubmit = function () {
        this.employeeServices.EmployeeForm.reset();
        this.dialogRef.close();
    };
    EmployeeAddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-add-edit',
            template: __webpack_require__(/*! ./employee-add-edit.component.html */ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-add-edit.component.css */ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
    ], EmployeeAddEditComponent);
    return EmployeeAddEditComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/employees/employee-home/employee-home.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/main-components/employees/employee-home/employee-home.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table */\r\ntable {\r\n    padding: 0px;\r\n    width: 100%;\r\n    min-width: 1700px;\r\n}\r\n/* table headers */\r\nth.mat-header-cell {\r\n    text-align: center;\r\n}\r\n/* table cells */\r\ntd.mat-cell {\r\n    text-align: center;\r\n}\r\n/* table row hovering */\r\ntr.element-row:hover {\r\n    background: #f5f5f5;\r\n}\r\n/* horizontal scroll */\r\n.container {\r\n    padding: 0px;\r\n    overflow-x: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLWhvbWUvZW1wbG95ZWUtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVjtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0Esa0JBQWtCO0FBQ2xCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZS1ob21lL2VtcGxveWVlLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlICovXHJcbnRhYmxlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxNzAwcHg7XHJcbn1cclxuLyogdGFibGUgaGVhZGVycyAqL1xyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8qIHRhYmxlIGNlbGxzICovXHJcbnRkLm1hdC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiB0YWJsZSByb3cgaG92ZXJpbmcgKi9cclxudHIuZWxlbWVudC1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG4vKiBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/main-components/employees/employee-home/employee-home.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/main-components/employees/employee-home/employee-home.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-sm-2\">\n    <h2 class=\"page-header\">Employees</h2>\n  </div>\n\n  <div class=\"col-sm-8\">\n    <input type=\"text\" matInput (keyup)=\"Search($event.target.value)\" class=\"form-control\" placeholder=\"Search for...\">\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button (click)=\"onAddEmployee()\" class=\"btn btn-info\">Add</button>\n      <span class=\"button-separator\"></span>\n    <button (click)=\"exportEmployeeRecordToExcel()\" class=\"btn btn-secondary\">Export</button>\n  </div>\n\n</div>\n\n<hr>\n\n<div class=\"container\">\n  <table mat-table [dataSource]=\"EmployeeRecords\">\n\n    <ng-container matColumnDef=\"Employee_LastName\">\n      <th mat-header-cell *matHeaderCellDef> Last Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_lname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_FirstName\">\n      <th mat-header-cell *matHeaderCellDef> Given Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_fname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_MiddleName\">\n      <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_mname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_ID\">\n      <th mat-header-cell *matHeaderCellDef> Employee ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_HireDate\">\n      <th mat-header-cell *matHeaderCellDef> Date Hired </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_hdate | date}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_JobTitle\">\n      <th mat-header-cell *matHeaderCellDef> Job </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_jtitle}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_Department\">\n      <th mat-header-cell *matHeaderCellDef> Department </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_dept}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_Status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_stat}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_FingerprintNumber\">\n      <th mat-header-cell *matHeaderCellDef> Fingerprint No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_fprint}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_SkypeID\">\n      <th mat-header-cell *matHeaderCellDef> Skype ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_skype}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_DomainLog\">\n      <th mat-header-cell *matHeaderCellDef> Domain Log </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_domlog}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_Suffix\">\n      <th mat-header-cell *matHeaderCellDef> Suffix </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_sfx}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Employee_BadgeID\">\n      <th mat-header-cell *matHeaderCellDef> Badge ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emp_badge}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Edit/DeleteButtons\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef class=\"action\"></th>\n      <td mat-cell *matCellDef=\"let emp_row\">\n\n        <button mat-icon-button (click)=\"onEditEmployee(emp_row)\">\n          <mat-icon>update</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"warn\" (click)=\"onDeleteEmployee(emp_row._id)\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n        \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"EmployeeColumns\" class=\"columns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: EmployeeColumns;\" class=\"element-row\"></tr>\n\n  </table>\n</div>\n\n<mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\"  [showFirstLastButtons] = \"true\"></mat-paginator>"

/***/ }),

/***/ "./src/app/components/main-components/employees/employee-home/employee-home.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/main-components/employees/employee-home/employee-home.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EmployeeHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeHomeComponent", function() { return EmployeeHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _employee_add_edit_employee_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee-add-edit/employee-add-edit.component */ "./src/app/components/main-components/employees/employee-add-edit/employee-add-edit.component.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/export.service */ "./src/app/services/export.service.ts");









var EmployeeHomeComponent = /** @class */ (function () {
    function EmployeeHomeComponent(dialog, alert, exportToExcel, employeeServices) {
        var _this = this;
        this.dialog = dialog;
        this.alert = alert;
        this.exportToExcel = exportToExcel;
        this.employeeServices = employeeServices;
        this.EmployeeRecords = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.EmployeeColumns = [
            'Employee_Status',
            'Employee_ID',
            'Employee_LastName',
            'Employee_FirstName',
            'Employee_MiddleName',
            'Employee_Suffix',
            'Employee_HireDate',
            'Employee_JobTitle',
            'Employee_Department',
            'Employee_FingerprintNumber',
            'Employee_SkypeID',
            'Employee_DomainLog',
            'Employee_BadgeID',
            'Edit/DeleteButtons'
        ];
        // READ
        this.getAllEmployees = function () {
            _this.employeeServices.getAllEmployeeRecords().subscribe(function (result) {
                _this.EmployeeRecords.data = result;
            });
        };
    }
    EmployeeHomeComponent.prototype.ngOnInit = function () {
        this.getAllEmployees();
    };
    // PAGINATOR
    EmployeeHomeComponent.prototype.ngAfterViewInit = function () {
        this.EmployeeRecords.paginator = this.paginator;
    };
    // SEARCH DATA FUNCTIONALITY
    EmployeeHomeComponent.prototype.Search = function (value) {
        this.EmployeeRecords.filter = value.trim().toLowerCase();
    };
    // Exports to Excel
    EmployeeHomeComponent.prototype.exportEmployeeRecordToExcel = function () {
        this.exportToExcel.exportEmployeeRecordToExcelFile(this.EmployeeRecords.data, 'PROV_Employees');
    };
    /* CRUD Activities */
    // CREATE
    EmployeeHomeComponent.prototype.onAddEmployee = function () {
        var _this = this;
        this.employeeServices.initialize();
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = "581px";
        dialogConfig.width = "1092px";
        this.dialog.open(_employee_add_edit_employee_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAddEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllEmployees();
            _this.employeeServices.EmployeeForm.reset();
        });
    };
    // UPDATE
    EmployeeHomeComponent.prototype.onEditEmployee = function (emp_row) {
        var _this = this;
        this.employeeServices.populate(emp_row);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = "581px";
        dialogConfig.width = "1092px";
        this.dialog.open(_employee_add_edit_employee_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAddEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllEmployees();
        });
    };
    // DELETE
    EmployeeHomeComponent.prototype.onDeleteEmployee = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this.employeeServices.deleteEmployeeRecord(id).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.getAllEmployees();
                }
                else {
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], EmployeeHomeComponent.prototype, "paginator", void 0);
    EmployeeHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-home',
            template: __webpack_require__(/*! ./employee-home.component.html */ "./src/app/components/main-components/employees/employee-home/employee-home.component.html"),
            styles: [__webpack_require__(/*! ./employee-home.component.css */ "./src/app/components/main-components/employees/employee-home/employee-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"],
            _services_export_service__WEBPACK_IMPORTED_MODULE_8__["ExportService"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]])
    ], EmployeeHomeComponent);
    return EmployeeHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3B1cmNoYXNlLW9yZGVycy9wdXJjaGFzZS1vcmRlci1hZGQtZWRpdC9wdXJjaGFzZS1vcmRlci1hZGQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-10\">\n      <h2 class=\"page-header\">{{purchaseOrderServices.PurchaseOrderForm.controls._id.value ? \"Edit Purchase Order\" : \"New Purchase Order\"}}</h2>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button (click)=\"onAddNewItem()\" class=\"btn btn-info\" [disabled]=\"purchaseOrderServices.PurchaseOrderForm.invalid\">Add items</button>\n    </div>\n\n  </div>\n  \n  <hr>\n  \n  <form [formGroup]=\"purchaseOrderServices.PurchaseOrderForm\" (submit)=\"onSubmit()\">\n    <input type=\"hidden\" name=\"id\" formControlName = \"_id\">\n    <input type=\"hidden\" name=\"__v\" formControlName = \"__v\">\n\n    <div class=\"row\" >\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"PO_ID\">Purchase Order ID <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_ID\" formControlName=\"po_id\" class=\"form-control\" placeholder=\"EG. IT-YYYY-MM-#\" \n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderForm.get('po_id').errors && (purchaseOrderServices.PurchaseOrderForm.controls.po_id.touched || purchaseOrderServices.PurchaseOrderForm.controls.po_id.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_id').errors?.required\" class=\"invalid-feedback\">This field is required!</div>\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_id').errors?.pattern\" class=\"invalid-feedback\">Pattern must be 'IT-YYYY-MM-#'</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"PO_Date\">Date Ordered <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_Date\" formControlName=\"po_date\" bsDatepicker [bsConfig]=\"{adaptivePosition: true}\" class=\"form-control\" placeholder=\"MM/DD/YYYY\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderForm.get('po_date').errors && (purchaseOrderServices.PurchaseOrderForm.controls.po_date.touched || purchaseOrderServices.PurchaseOrderForm.controls.po_date.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_date').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"PO_DateOfItemReceived\">Date Received</label>\n          <input type=\"text\" name=\"PO_DateOfItemReceived\" formControlName=\"po_d_rcvd\" bsDatepicker [bsConfig]=\"{adaptivePosition: true}\" class=\"form-control\" placeholder=\"MM/DD/YYYY\">\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"PO_POStatus\">Status <span class=\"asterisk\">*</span></label>\n          <select name=\"PO_POStatus\" formControlName=\"po_stat\" class=\"custom-select\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderForm.get('po_stat').errors && (purchaseOrderServices.PurchaseOrderForm.controls.po_stat.touched || purchaseOrderServices.PurchaseOrderForm.controls.po_stat.dirty)}\">\n            <option value=\"On Process\">On Process</option>\n            <option value=\"Delivered\">Delivered</option>\n          </select>\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_stat').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n      \n    </div>\n    \n    <div class=\"row\">\n\n      <div class=\"col-sm-9\">\n        <div class=\"form-group\">\n          <label for=\"PO_SupplierName\">Name of supplier <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_SupplierName\" formControlName=\"po_s_name\" class=\"form-control\" placeholder=\"EG. ABC Corp\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderForm.get('po_s_name').errors && (purchaseOrderServices.PurchaseOrderForm.controls.po_s_name.touched || purchaseOrderServices.PurchaseOrderForm.controls.po_s_name.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_s_name').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"PO_TotalCost\">Total Cost <span class=\"asterisk\">*</span></label>\n          <div class=\"form-group\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\"><span class=\"input-group-text\">₱</span></div>\n                <input type=\"text\" name=\"PO_TotalCost\" formControlName=\"po_t\" [value]=\"purchaseOrderServices.PurchaseOrderForm.value.po_t\" class=\"form-control\" placeholder=\"₱₱₱₱₱\" readonly>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"PO_ItemDscription\">Item Description <span class=\"asterisk\">*</span></label>\n      <input type=\"text\" name=\"PO_ItemDscription\" formControlName=\"po_i_desc\" class=\"form-control\" [value]=\"purchaseOrderServices.PurchaseOrderForm.value.po_i_desc\" placeholder=\"EG. Name of item (Quantity)(Unit Cost)   ...\" readonly>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"PO_Client\">Client/Project <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_Client\" formControlName=\"po_client\" class=\"form-control\" placeholder=\"EG. ProV/Circor/etc.\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderForm.get('po_client').errors && (purchaseOrderServices.PurchaseOrderForm.controls.po_client.touched || purchaseOrderServices.PurchaseOrderForm.controls.po_client.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_client').errors?.required\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"PO_NameOfItemReceiver\">Received by <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_NameOfItemReceiver\" formControlName=\"po_rcvr\" class=\"form-control\" placeholder=\"Who received the item?\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderForm.get('po_rcvr').errors && (purchaseOrderServices.PurchaseOrderForm.controls.po_rcvr.touched || purchaseOrderServices.PurchaseOrderForm.controls.po_rcvr.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderForm.get('po_rcvr').errors?.required\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"PO_Remarks\">Remarks</label>\n          <input type=\"text\" name=\"PO_Remarks\" formControlName=\"po_remarks\" class=\"form-control\" placeholder=\"Comments, etc., ...\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-1\">\n        <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"purchaseOrderServices.PurchaseOrderForm.invalid || (!purchaseOrderServices.PurchaseOrderForm.value.po_i_desc && !purchaseOrderServices.PurchaseOrderForm.value.po_t)\" value=\"Submit\">\n      </div>\n\n      <div class=\"col-sm-5\">\n        <small class=\"form-text\" style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n      </div>\n\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PurchaseOrderAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderAddEditComponent", function() { return PurchaseOrderAddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _purchase_order_add_item_purchase_order_add_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-order-add-item/purchase-order-add-item.component */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.ts");






var PurchaseOrderAddEditComponent = /** @class */ (function () {
    function PurchaseOrderAddEditComponent(alert, dialog, dialogRef, purchaseOrderServices) {
        this.alert = alert;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.purchaseOrderServices = purchaseOrderServices;
    }
    PurchaseOrderAddEditComponent.prototype.ngOnInit = function () {
    };
    PurchaseOrderAddEditComponent.prototype.onAddNewItem = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        this.dialog.open(_purchase_order_add_item_purchase_order_add_item_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderAddItemComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.purchaseOrderServices.PurchaseOrderAddItemForm.reset();
        });
    };
    // After SUBMIT
    PurchaseOrderAddEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // ADD & EDIT FUNCTIONALITY
        // ON ADD
        if (!this.purchaseOrderServices.PurchaseOrderForm.get('_id').value) {
            this.purchaseOrderServices.addNewPurchaseOrderRecord(this.purchaseOrderServices.PurchaseOrderForm.value).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.closePopUpAfterSubmit();
                }
                else {
                    _this.closePopUpAfterSubmit();
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    if (result.err == "undefined") {
                        console.log("No errors occured! Yey!");
                    }
                    else {
                        console.log("An error has encountered: " + result.err);
                    }
                }
            });
            // ON EDIT
        }
        else {
            this.purchaseOrderServices.editPurchaseOrderRecord(this.purchaseOrderServices.PurchaseOrderForm.value).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.closePopUpAfterSubmit();
                }
                else {
                    _this.closePopUpAfterSubmit();
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    if (result.err == "undefined") {
                        console.log("No errors occured! Yey!");
                    }
                    else {
                        console.log("An error has encountered: " + result.err);
                    }
                }
            });
        }
    };
    // After successful submit, popup form will close
    PurchaseOrderAddEditComponent.prototype.closePopUpAfterSubmit = function () {
        this.purchaseOrderServices.PurchaseOrderForm.reset();
        this.dialogRef.close();
    };
    PurchaseOrderAddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order-add-edit',
            template: __webpack_require__(/*! ./purchase-order-add-edit.component.html */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order-add-edit.component.css */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"]])
    ], PurchaseOrderAddEditComponent);
    return PurchaseOrderAddEditComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3B1cmNoYXNlLW9yZGVycy9wdXJjaGFzZS1vcmRlci1hZGQtZWRpdC9wdXJjaGFzZS1vcmRlci1hZGQtaXRlbS9wdXJjaGFzZS1vcmRlci1hZGQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-7\">\n      <h2 class=\"page-header\">New Item</h2>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"form-inline float-right\">\n        <label for=\"item_count\">Number of items added: {{this.count}}</label>\n          <span class=\"input-group-separator\"></span>\n        <div *ngIf=\"this.count != 0\">\n          <button (click)=\"compileDataFromArray()\" class=\"btn btn-info\">Send</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <hr>\n\n  <form [formGroup]=\"purchaseOrderServices.PurchaseOrderAddItemForm\" (submit)=\"addToArray()\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-5\">\n        <div class=\"form-group\">\n          <label for=\"PO_ItemName\">Name of item <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_ItemName\" formControlName=\"po_i_name\" class=\"form-control\" placeholder=\"EG. Lenovo ThinkPad T440p\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_name').errors && (purchaseOrderServices.PurchaseOrderAddItemForm.controls.po_i_name.touched || purchaseOrderServices.PurchaseOrderAddItemForm.controls.po_i_name.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_name').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\">\n          <label for=\"PO_ItemQuantity\">Quantity <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_ItemQuantity\" formControlName=\"po_i_count\" class=\"form-control\" placeholder=\"How many?\"\n          [ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_count').errors && (purchaseOrderServices.PurchaseOrderAddItemForm.controls.po_i_count.touched || purchaseOrderServices.PurchaseOrderAddItemForm.controls.po_i_count.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_count').errors?.required\" class=\"invalid-feedback\">This field is required!</div>\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_count').errors?.pattern\" class=\"invalid-feedback\">Numbers only please.</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\">\n          <label for=\"PO_ItemCost\">Cost <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"PO_ItemCost\" formControlName=\"po_i_cost\" class=\"form-control\" placeholder=\"How much?\"[ngClass]=\"{'is-invalid' : purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_cost').errors && (purchaseOrderServices.PurchaseOrderAddItemForm.controls.po_i_cost.touched || purchaseOrderServices.PurchaseOrderAddItemForm.controls.po_i_cost.dirty)}\">\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_cost').errors?.required\" class=\"invalid-feedback\">This field is required! </div>\n          <div *ngIf=\"purchaseOrderServices.PurchaseOrderAddItemForm.get('po_i_cost').errors?.pattern\" class=\"invalid-feedback\">Numbers only please.</div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"PO_TotalCost\">Unit Total Cost</label>\n          <div class=\"form-group\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\"><span class=\"input-group-text\">₱</span></div>\n                <input type=\"text\" name=\"PO_UnitTotalCost\" formControlName=\"po_ut\" [value]=\"computeForTotalCost()\" class=\"form-control\" readonly>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-1\">\n        <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"purchaseOrderServices.PurchaseOrderAddItemForm.invalid\" value=\"Add\">\n      </div>\n\n      <div class=\"col-sm-5\">\n        <small class=\"form-text\"  style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n      </div>\n\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PurchaseOrderAddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderAddItemComponent", function() { return PurchaseOrderAddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");




var PurchaseOrderAddItemComponent = /** @class */ (function () {
    function PurchaseOrderAddItemComponent(purchaseOrderServices, dialogRef) {
        this.purchaseOrderServices = purchaseOrderServices;
        this.dialogRef = dialogRef;
        this.count = 0;
        this.item_name = [];
        this.item_cost = [];
        this.item_count = [];
        this.unit_total = [];
    }
    PurchaseOrderAddItemComponent.prototype.ngOnInit = function () {
    };
    PurchaseOrderAddItemComponent.prototype.computeForTotalCost = function () {
        return (this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_cost * this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_count);
    };
    // Items to array
    PurchaseOrderAddItemComponent.prototype.addToArray = function () {
        // Arrays
        this.item_name.push(this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_name);
        this.item_cost.push(this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_cost);
        this.item_count.push(this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_count);
        this.unit_total.push(this.computeForTotalCost());
        // Displays the items added to the console
        console.log("Item Name: " + this.item_name[this.count] + "   " + "Item Qty: " + this.item_count[this.count] + "   " + "Item Cost: " + this.item_count[this.count] + "   " + "Total: " + this.computeForTotalCost());
        this.count++;
        this.purchaseOrderServices.PurchaseOrderAddItemForm.reset();
    };
    // Saving
    PurchaseOrderAddItemComponent.prototype.compileDataFromArray = function () {
        var item = new Array(this.count);
        var i, itemDescription = "";
        var totalcost = 0;
        // ItemName (ItemQuantity)(ItemCost)
        for (i = 0; i < this.count; i++) {
            item[i] = this.item_name[i] + " (" + this.item_count[i] + ")" + "(" + this.item_cost[i] + ")";
        }
        // One long string
        for (i = 0; i < item.length; i++) {
            itemDescription = itemDescription + item[i] + "   ";
        }
        // Computes for Unit Total Cost
        for (i = 0; i < this.count; i++) {
            totalcost = totalcost + this.unit_total[i];
        }
        this.purchaseOrderServices.PurchaseOrderForm.value.po_i_desc = itemDescription;
        this.purchaseOrderServices.PurchaseOrderForm.value.po_t = totalcost;
        console.log(">>End of Purchase Order " + this.purchaseOrderServices.PurchaseOrderForm.value.po_id + "<<");
        this.closePopUpAfterSubmit();
    };
    // After successful submit, popup form will close
    PurchaseOrderAddItemComponent.prototype.closePopUpAfterSubmit = function () {
        this.purchaseOrderServices.PurchaseOrderAddItemForm.reset();
        this.dialogRef.close();
    };
    PurchaseOrderAddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order-add-item',
            template: __webpack_require__(/*! ./purchase-order-add-item.component.html */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order-add-item.component.css */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-item/purchase-order-add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], PurchaseOrderAddItemComponent);
    return PurchaseOrderAddItemComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    padding: 0px;\r\n    width: 100%;\r\n    min-width: 2000px;\r\n}\r\n\r\nth.mat-header-cell {\r\n    text-align: center;\r\n}\r\n\r\ntd.mat-cell {\r\n    text-align: center;\r\n}\r\n\r\ntr.element-row:hover {\r\n    background: #f5f5f5;\r\n}\r\n\r\n.container-table {\r\n    padding: 0px;\r\n    overflow-x: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvcHVyY2hhc2Utb3JkZXJzL3B1cmNoYXNlLW9yZGVyLWhvbWUvcHVyY2hhc2Utb3JkZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvcHVyY2hhc2Utb3JkZXJzL3B1cmNoYXNlLW9yZGVyLWhvbWUvcHVyY2hhc2Utb3JkZXItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMDBweDtcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ci5lbGVtZW50LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXRhYmxlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-sm-3\">\n    <h2 class=\"page-header\">Purchase Orders</h2>\n  </div>\n\n  <div class=\"col-sm-7\">\n    <input type=\"text\" matInput (keyup)=\"Search($event.target.value)\" class=\"form-control\" placeholder=\"Search for...\">\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button (click)=\"onAddPurchaseOrder()\" class=\"btn btn-info\">Add</button>\n      <span class=\"button-separator\"></span>\n    <button (click)=\"exportPurchaseOrderRecordToExcel()\" class=\"btn btn-secondary\">Export</button>\n  </div>\n\n</div>\n\n<hr>\n\n<div class=\"container-table\">\n  <table mat-table [dataSource]=\"PurchaseOrderRecords\">\n\n    <ng-container matColumnDef=\"PurchaseOrder_ID\">\n      <th mat-header-cell *matHeaderCellDef> PO ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_DateIssued\">\n      <th mat-header-cell *matHeaderCellDef> Date Issued </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_date | date}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_SupplierName\">\n      <th mat-header-cell *matHeaderCellDef> Supplier Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_s_name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_ItemDescription\">\n      <th mat-header-cell *matHeaderCellDef> Item Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_i_desc}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_TotalCost\">\n      <th mat-header-cell *matHeaderCellDef> Total Cost </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_t}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_POClient\">\n      <th mat-header-cell *matHeaderCellDef> Client </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_client}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Accountability_ItemClassification\">\n      <th mat-header-cell *matHeaderCellDef> Item Classification </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acc_i_clss}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_NameOfItemReceiver\">\n      <th mat-header-cell *matHeaderCellDef> Item Receiver </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_rcvr}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_POStatus\">\n      <th mat-header-cell *matHeaderCellDef> PO Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_stat}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_DateReceived\">\n      <th mat-header-cell *matHeaderCellDef> Date Received </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.po_d_rcvd | date}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PurchaseOrder_Remarks\">\n        <th mat-header-cell *matHeaderCellDef> Remarks </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.po_remarks}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"Edit/DeleteButtons\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef></th>\n      \n      <td mat-cell *matCellDef=\"let po_row\">\n\n        <button mat-icon-button (click)=\"onEditPurchaseOrder(po_row)\">\n          <mat-icon>update</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"warn\" (click)=\"onDeletePurchaseOrder(po_row._id)\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"PurchaseOrderColumns\" class=\"columns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: PurchaseOrderColumns;\" class=\"element-row\"></tr>\n\n  </table>\n</div>\n  \n<mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\"  [showFirstLastButtons] = \"true\"></mat-paginator>"

/***/ }),

/***/ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PurchaseOrderHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderHomeComponent", function() { return PurchaseOrderHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../purchase-order-add-edit/purchase-order-add-edit.component */ "./src/app/components/main-components/purchase-orders/purchase-order-add-edit/purchase-order-add-edit.component.ts");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/export.service */ "./src/app/services/export.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);









var PurchaseOrderHomeComponent = /** @class */ (function () {
    function PurchaseOrderHomeComponent(dialog, alert, exportToExcel, purchaseOrderServices) {
        var _this = this;
        this.dialog = dialog;
        this.alert = alert;
        this.exportToExcel = exportToExcel;
        this.purchaseOrderServices = purchaseOrderServices;
        this.PurchaseOrderRecords = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.PurchaseOrderColumns = [
            'PurchaseOrder_ID',
            'PurchaseOrder_POStatus',
            'PurchaseOrder_DateIssued',
            'PurchaseOrder_DateReceived',
            'PurchaseOrder_SupplierName',
            'PurchaseOrder_ItemDescription',
            'PurchaseOrder_TotalCost',
            'PurchaseOrder_POClient',
            'PurchaseOrder_NameOfItemReceiver',
            'PurchaseOrder_Remarks',
            'Edit/DeleteButtons'
        ];
        // READ
        this.getAllPurchaseOrderRecords = function () {
            _this.purchaseOrderServices.getAllPurchaseOrderRecords().subscribe(function (result) {
                _this.PurchaseOrderRecords.data = result;
            });
        };
    }
    PurchaseOrderHomeComponent.prototype.ngOnInit = function () {
        this.getAllPurchaseOrderRecords();
    };
    // PAGINATOR
    PurchaseOrderHomeComponent.prototype.ngAfterViewInit = function () {
        this.PurchaseOrderRecords.paginator = this.paginator;
    };
    // SEARCH DATA FUNCTIONALITY
    PurchaseOrderHomeComponent.prototype.Search = function (value) {
        this.PurchaseOrderRecords.filter = value.trim().toLowerCase();
    };
    // Export to Excel
    PurchaseOrderHomeComponent.prototype.exportPurchaseOrderRecordToExcel = function () {
        this.exportToExcel.exportPurchaseOrdersToExcelFile(this.PurchaseOrderRecords.data, 'PROV_PurchaseOrders');
    };
    /* CRUD Activities */
    // CREATE
    PurchaseOrderHomeComponent.prototype.onAddPurchaseOrder = function () {
        var _this = this;
        this.purchaseOrderServices.initialize();
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = "1098px";
        dialogConfig.height = "478px";
        dialogConfig.autoFocus = true;
        this.dialog.open(_purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderAddEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllPurchaseOrderRecords();
            _this.purchaseOrderServices.PurchaseOrderForm.reset();
        });
    };
    // UPDATE
    PurchaseOrderHomeComponent.prototype.onEditPurchaseOrder = function (po_row) {
        var _this = this;
        this.purchaseOrderServices.populate(po_row);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = "1098px";
        dialogConfig.height = "478px";
        dialogConfig.autoFocus = true;
        this.dialog.open(_purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderAddEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllPurchaseOrderRecords();
        });
    };
    // DELETE
    PurchaseOrderHomeComponent.prototype.onDeletePurchaseOrder = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this.purchaseOrderServices.deletePurchaseOrderRecord(id).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.getAllPurchaseOrderRecords();
                }
                else {
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PurchaseOrderHomeComponent.prototype, "paginator", void 0);
    PurchaseOrderHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order-home',
            template: __webpack_require__(/*! ./purchase-order-home.component.html */ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order-home.component.css */ "./src/app/components/main-components/purchase-orders/purchase-order-home/purchase-order-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"],
            _services_export_service__WEBPACK_IMPORTED_MODULE_7__["ExportService"],
            _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"]])
    ], PurchaseOrderHomeComponent);
    return PurchaseOrderHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/users/login/login.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/main-components/users/login/login.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main-components/users/login/login.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/main-components/users/login/login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n\n<hr>\n\n<form [formGroup]=\"userServices.LoginForm\" (submit)=\"onLoginSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"Username\">Username <span class=\"asterisk\">*</span></label>\n    <input type=\"text\" name=\"username\" formControlName=\"username\" class=\"form-control\" placeholder=\"Enter Username\"\n    [ngClass]=\"{'is-invalid' : userServices.LoginForm.get('username').errors && (userServices.LoginForm.controls.username.touched || userServices.LoginForm.controls.username.dirty)}\">\n    <div *ngIf=\"userServices.LoginForm.get('username').errors\" class=\"invalid-feedback\">This field is required!</div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"Password\">Password <span class=\"asterisk\">*</span></label>\n    <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n    [ngClass]=\"{'is-invalid' : userServices.LoginForm.get('password').errors && (userServices.LoginForm.controls.password.touched || userServices.LoginForm.controls.password.dirty)}\">\n    <div *ngIf=\"userServices.LoginForm.get('password').errors\" class=\"invalid-feedback\">This field is required!</div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-2\">\n      <input class=\"btn btn-info\" [disabled]=\"userServices.LoginForm.invalid\" type=\"submit\" value=\"Login\">\n    </div>\n\n    <div class=\"col-sm-5\">\n        <small class=\"form-text\"  style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n    </div>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/components/main-components/users/login/login.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/main-components/users/login/login.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);







var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, authenticate, alert, userServices, dialogRef) {
        this.route = route;
        this.authenticate = authenticate;
        this.alert = alert;
        this.userServices = userServices;
        this.dialogRef = dialogRef;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authenticate.authenticateUser(this.userServices.LoginForm.value).subscribe(function (result) {
            if (result.success) {
                _this.authenticate.storeUserDataToLocalStorage(result.token, result.userinfo);
                _this.alert.show("You are now logged in.", { cssClass: 'alert-success', timeout: 3000 });
                _this.closeAfterSubmit();
                _this.route.navigate(['/dashboard']);
            }
            else {
                _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                console.log(result.err);
                _this.userServices.LoginForm.reset();
            }
        });
    };
    // After successful submit, popup form will close
    LoginComponent.prototype.closeAfterSubmit = function () {
        this.userServices.LoginForm.reset();
        this.dialogRef.close();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/main-components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/main-components/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/users/register/register.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main-components/users/register/register.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main-components/users/register/register.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/main-components/users/register/register.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h2 class=\"page-header\">Register/Add User</h2>\n  \n  <hr>\n\n  <form [formGroup]=\"userServices.UserForm\" (submit)=\"onSubmit()\">\n    <input type=\"hidden\" name=\"_id\" formControlName=\"_id\">\n    <input type=\"hidden\" name=\"__v\" formControlName=\"__v\">\n\n    <div class=\"form-group\">\n      <div class=\"row\">\n        \n        <div class=\"col-sm-4\">\n          <label for=\"U_LastName\">Last Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"U_LastName\" formControlName=\"user_lname\" class=\"form-control\" placeholder=\"Last name\"\n          [ngClass]=\"{'is-invalid' : userServices.UserForm.get('user_lname').errors && (userServices.UserForm.controls.user_lname.touched || userServices.UserForm.controls.user_lname.dirty)}\">\n          <div *ngIf=\"userServices.UserForm.get('user_lname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <label for=\"U_LastName\">Given Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"U_FirstName\" formControlName=\"user_fname\" class=\"form-control\" placeholder=\"Given Name\"\n          [ngClass]=\"{'is-invalid' : userServices.UserForm.get('user_fname').errors && (userServices.UserForm.controls.user_fname.touched || userServices.UserForm.controls.user_fname.dirty)}\">\n          <div *ngIf=\"userServices.UserForm.get('user_fname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <label for=\"U_LastName\">Middle Name</label>\n          <input type=\"text\" name=\"U_MiddleName\" formControlName=\"user_mname\" class=\"form-control\" placeholder=\"Middle name\">\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username <span class=\"asterisk\">*</span></label>\n      <input type=\"text\" name=\"U_Username\" formControlName=\"username\" class=\"form-control\" placeholder=\"Enter Username\"\n      [ngClass]=\"{'is-invalid' : userServices.UserForm.get('username').errors && (userServices.UserForm.controls.username.touched || userServices.UserForm.controls.username.dirty)}\">\n      <div *ngIf=\"userServices.UserForm.get('username').errors\" class=\"invalid-feedback\">This field is required!</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password <span class=\"asterisk\">*</span></label>\n      <input type=\"password\" name=\"U_Password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n      [ngClass]=\"{'is-invalid' : userServices.UserForm.get('password').errors && (userServices.UserForm.controls.password.touched || userServices.UserForm.controls.password.dirty)}\">\n      <div *ngIf=\"userServices.UserForm.get('password').errors\" class=\"invalid-feedback\">This field is required!</div>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-2\">\n        <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"userServices.UserForm.invalid\" value=\"Submit\">\n      </div>\n\n      <div class=\"col-sm-5\">\n        <small class=\"form-text\" style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n      </div>\n\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/main-components/users/register/register.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/main-components/users/register/register.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(alert, userServices, dialogRef) {
        this.alert = alert;
        this.userServices = userServices;
        this.dialogRef = dialogRef;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // When 'SUBMIT' is clicked
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        // Register User
        this.userServices.registerUser(this.userServices.UserForm.value).subscribe(function (result) {
            if (result.success) {
                _this.alert.show("You are now registered!", { cssClass: 'alert-success', timeout: 3000 });
                _this.closeAfterSubmit();
            }
            else {
                _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                console.log(result.err);
                _this.userServices.UserForm.reset();
            }
        });
    };
    RegisterComponent.prototype.closeAfterSubmit = function () {
        this.dialogRef.close();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/main-components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/main-components/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/users/user-edit/user-edit.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/main-components/users/user-edit/user-edit.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/main-components/users/user-edit/user-edit.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/main-components/users/user-edit/user-edit.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"input-group\">\n    <h2 class=\"page-header\">Edit User</h2>\n  </div>\n\n  <hr>\n\n  <form [formGroup]=\"userServices.UserForm\" (submit)=\"onSubmit()\">\n    <input type=\"hidden\" name=\"_id\" formControlName=\"_id\">\n    <input type=\"hidden\" name=\"__v\" formControlName=\"__v\">\n\n    <div class=\"form-group\">\n      <div class=\"row\">\n        \n        <div class=\"col-sm-4\">\n          <label for=\"U_LastName\">Last Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"U_LastName\" formControlName=\"user_lname\" class=\"form-control\" placeholder=\"Last name\"\n          [ngClass]=\"{'is-invalid' : userServices.UserForm.get('user_lname').errors && (userServices.UserForm.controls.user_lname.touched || userServices.UserForm.controls.user_lname.dirty)}\">\n          <div *ngIf=\"userServices.UserForm.get('user_lname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <label for=\"U_LastName\">Given Name <span class=\"asterisk\">*</span></label>\n          <input type=\"text\" name=\"U_FirstName\" formControlName=\"user_fname\" class=\"form-control\" placeholder=\"Given Name\"\n          [ngClass]=\"{'is-invalid' : userServices.UserForm.get('user_fname').errors && (userServices.UserForm.controls.user_fname.touched || userServices.UserForm.controls.user_fname.dirty)}\">\n          <div *ngIf=\"userServices.UserForm.get('user_fname').errors\" class=\"invalid-feedback\">This field is required!</div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <label for=\"U_LastName\">Middle Name</label>\n          <input type=\"text\" name=\"U_MiddleName\" formControlName=\"user_mname\" class=\"form-control\" placeholder=\"Middle name\">\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username <span class=\"asterisk\">*</span></label>\n      <input type=\"text\" name=\"U_Username\" formControlName=\"username\" class=\"form-control\" placeholder=\"Enter Username\"\n      [ngClass]=\"{'is-invalid' : userServices.UserForm.get('username').errors && (userServices.UserForm.controls.username.touched || userServices.UserForm.controls.username.dirty)}\">\n      <div *ngIf=\"userServices.UserForm.get('username').errors\" class=\"invalid-feedback\">This field is required!</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password <span class=\"asterisk\">*</span></label>\n      <input type=\"password\" name=\"U_Password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n      [ngClass]=\"{'is-invalid' : userServices.UserForm.get('password').errors && (userServices.UserForm.controls.password.touched || userServices.UserForm.controls.password.dirty)}\">\n      <div *ngIf=\"userServices.UserForm.get('password').errors\" class=\"invalid-feedback\">This field is required!</div>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-2\">\n        <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"userServices.UserForm.invalid\" value=\"Submit\">\n      </div>\n\n      <div class=\"col-sm-5\">\n        <small class=\"form-text\" style=\"color: red;\">Fields marked with asterisk(*) are required.</small>\n      </div>\n\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/main-components/users/user-edit/user-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/main-components/users/user-edit/user-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);







var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(alert, dialogRef, userServices, authenticate, router) {
        this.alert = alert;
        this.dialogRef = dialogRef;
        this.userServices = userServices;
        this.authenticate = authenticate;
        this.router = router;
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    // When 'SUBMIT' is clicked
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // EDIT FUNCTIONALITY
        // ON EDIT
        this.userServices.editUserAccount(this.userServices.UserForm.value).subscribe(function (result) {
            if (result.success) {
                _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.closeAfterSubmit();
            }
            else {
                _this.closeAfterSubmit();
                _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                console.log(result.err);
            }
        });
    };
    // After successful submit, popup form will close
    UserEditComponent.prototype.closeAfterSubmit = function () {
        this.dialogRef.close();
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/components/main-components/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/components/main-components/users/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/main-components/users/user-home/user-home.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/main-components/users/user-home/user-home.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table */\r\ntable {\r\n    padding: 0px;\r\n    width: 100%;\r\n    /* min-width: 50px; */\r\n}\r\n/* table headers */\r\nth.mat-header-cell {\r\n    text-align: center;\r\n}\r\n/* table cells */\r\ntd.mat-cell {\r\n    text-align: center;\r\n}\r\n/* table row hovering */\r\ntr.element-row:hover {\r\n    background: #f5f5f5;\r\n}\r\n/* horizontal scroll */\r\n.container {\r\n    padding: 0px;\r\n    overflow-x: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvdXNlcnMvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVjtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0Esa0JBQWtCO0FBQ2xCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3VzZXJzL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlICovXHJcbnRhYmxlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogbWluLXdpZHRoOiA1MHB4OyAqL1xyXG59XHJcbi8qIHRhYmxlIGhlYWRlcnMgKi9cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiB0YWJsZSBjZWxscyAqL1xyXG50ZC5tYXQtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLyogdGFibGUgcm93IGhvdmVyaW5nICovXHJcbnRyLmVsZW1lbnQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLyogaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/main-components/users/user-home/user-home.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/main-components/users/user-home/user-home.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-1\">\n      <h2 class=\"page-header\">Users</h2>\n    </div>\n\n    <div class=\"col-sm-10\">\n      <mat-form-field>\n        <input type=\"text\" class=\"form-control\" matInput (keyup)=\"Search($event.target.value)\" placeholder=\"Search for...\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-1\">\n      <button (click)=\"onAddUserAccount()\" class=\"btn btn-info\">Add</button>\n    </div>\n\n  </div>\n\n  <hr>\n\n  <div class=\"container\">\n    <table mat-table [dataSource]=\"UserAccounts\">\n\n      <ng-container matColumnDef=\"User_LastName\">\n        <th mat-header-cell *matHeaderCellDef> Last Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.user_lname}} </td>\n      </ng-container>\n     \n      <ng-container matColumnDef=\"User_FirstName\">\n        <th mat-header-cell *matHeaderCellDef> Given Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.user_fname}} </td>\n      </ng-container>\n     \n      <ng-container matColumnDef=\"User_MiddleName\">\n        <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.user_mname}} </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"User_Username\">\n        <th mat-header-cell *matHeaderCellDef> Username </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"User_Password\">\n        <th mat-header-cell *matHeaderCellDef> Password </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.password}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Edit/DeleteButtons\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let user_row\">\n\n          <button mat-icon-button (click)=\"onEditUserAccount(user_row)\">\n              <mat-icon class=\"mat-18\">update</mat-icon>\n          </button>\n\n          <button mat-icon-button color=\"warn\" (click)=\"onDeleteUserAccount(user_row._id)\">\n            <mat-icon class=\"mat-18\">delete_outline</mat-icon>\n          </button>\n\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"UserColumns\" class=\"columns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: UserColumns;\" class=\"element-row\"></tr>\n    \n    </table>\n  </div>\n\n  <mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20, 50 ,100]\" [showFirstLastButtons] = \"true\"></mat-paginator>\n\n  <hr>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/components/main-components/users/user-home/user-home.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/main-components/users/user-home/user-home.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-edit/user-edit.component */ "./src/app/components/main-components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.component */ "./src/app/components/main-components/users/register/register.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);











var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent(alert, dialog, router, userServices, authenticate) {
        var _this = this;
        this.alert = alert;
        this.dialog = dialog;
        this.router = router;
        this.userServices = userServices;
        this.authenticate = authenticate;
        this.UserAccounts = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.UserColumns = [
            'User_LastName',
            'User_FirstName',
            'User_MiddleName',
            'User_Username',
            'User_Password',
            'Edit/DeleteButtons'
        ];
        // READ
        this.getAllUsers = function () {
            _this.userServices.getAllUserAccounts().subscribe(function (result) {
                _this.UserAccounts.data = result;
            });
        };
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    // PAGINATOR
    UserHomeComponent.prototype.ngAfterViewInit = function () {
        this.UserAccounts.paginator = this.paginator;
    };
    // SEARCH DATA FUNCTIONALITY
    UserHomeComponent.prototype.Search = function (value) {
        this.UserAccounts.filter = value.trim().toLowerCase();
    };
    /* CRUD Activities */
    UserHomeComponent.prototype.onAddUserAccount = function () {
        var _this = this;
        this.userServices.initialize();
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.userServices.UserForm.reset();
            _this.getAllUsers();
        });
    };
    // UPDATE
    UserHomeComponent.prototype.onEditUserAccount = function (user_row) {
        var _this = this;
        this.userServices.populate(user_row);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        this.dialog.open(_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            _this.getAllUsers();
        });
    };
    // DELETE
    UserHomeComponent.prototype.onDeleteUserAccount = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this.userServices.deleteUserAccount(id).subscribe(function (result) {
                if (result.success) {
                    _this.alert.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.getAllUsers();
                    // logs out if logged-in account was deleted
                    if (localStorage.getItem('account').includes(id) == true) {
                        _this.authenticate.logout();
                        _this.router.navigate(['/']);
                        _this.alert.show("You are logged out.", { cssClass: 'alert-success', timeout: 3000 });
                    }
                }
                else {
                    _this.alert.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(result.err);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserHomeComponent.prototype, "paginator", void 0);
    UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/components/main-components/users/user-home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/components/main-components/users/user-home/user-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticateService"]])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" style=\"color:#2D2A55; font-size: 20px;\">\n    <img class=\"logo\" src=\"../../../assets/logo.png\" height=\"30px\" width=\"30px\">\n    ProV Inventory\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" \n  aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item active\" *ngIf=\"authenticate.notLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n\n      <li class=\"nav-item active\" *ngIf=\"!authenticate.notLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item active\" *ngIf=\"!authenticate.notLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard/users']\">Users</a>\n      </li>\n\n      <li class=\"nav-item active\" *ngIf=\"!authenticate.notLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/emps']\">Employees</a>\n      </li>\n\n      <li class=\"nav-item active\" *ngIf=\"!authenticate.notLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/pos']\">Purchase Orders</a>\n      </li>\n\n      <li class=\"nav-item active\" *ngIf=\"!authenticate.notLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/accs']\">Accountabilities</a>\n      </li>\n\n      <li class=\"nav-item active\" *ngIf=\"!authenticate.notLoggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticate, alert, router) {
        this.authenticate = authenticate;
        this.alert = alert;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authenticate.logout();
        this.alert.show("You are logged out.", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/material-module/material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/material-module/material.module.ts ***!
  \************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // ANGULAR Material Module Imports
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
            ],
            exports: [
                // ANGULAR Material Module Exports
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/accountability.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/accountability.service.ts ***!
  \****************************************************/
/*! exports provided: AccountabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountabilityService", function() { return AccountabilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AccountabilityService = /** @class */ (function () {
    function AccountabilityService(http) {
        this.http = http;
        // ACCOUNTABILITY FORMGROUP
        this.AccountabilityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            // Pattern: ACC-<four 0-9 numbers>-<two 0-9 numbers>-<at least 3 consecutive 0-9 numbers>
            Acc_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('ACC-([0-9]{4})-([0-9]{2})-([0-9]{3,})')),
            acc_rcvr_lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_rcvr_fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_rcvr_mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            // Pattern: any qty of 0-9 number
            acc_rcvr_cn: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')),
            acc_rcvr_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_rcvr_loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            acc_date_i: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_date_r: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            acc_i_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_i_clss: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            // Pattern: any qty of 0-9 number
            acc_i_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]),
            acc_i_ser: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_i_tnum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acc_i_remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            // Pattern: IT-<four 0-9 numbers>-<two 0-9 numbers>-<at least one 0-9 number>
            Acc_PO_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('IT-([0-9]{4})-([0-9]{2})-([0-9]+)')),
            Acc_PO_SupplierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Acc_InvoiceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            __v: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    // FILLING IN THE TEXTBOXES WITH BLANK DATA
    AccountabilityService.prototype.initialize = function () {
        this.AccountabilityForm.setValue({
            _id: null,
            Acc_ID: null,
            acc_rcvr_lname: null,
            acc_rcvr_fname: null,
            acc_rcvr_mname: null,
            acc_rcvr_cn: null,
            acc_rcvr_dept: null,
            acc_rcvr_loc: null,
            acc_date_i: new Date,
            acc_date_r: null,
            acc_i_name: null,
            acc_i_clss: null,
            acc_i_count: null,
            acc_i_ser: null,
            acc_i_tnum: null,
            acc_i_remarks: null,
            Acc_PO_ID: null,
            Acc_PO_SupplierName: null,
            Acc_InvoiceNumber: null,
            __v: null
        });
    };
    // FILLING UP EACH TEXTBOX WITH DATA
    AccountabilityService.prototype.populate = function (acc_row) {
        this.AccountabilityForm.setValue(acc_row);
        if (acc_row.acc_date_i) {
            this.AccountabilityForm.get('acc_date_i').setValue(new Date(this.AccountabilityForm.get('acc_date_i').value.toString().slice(0, -1)));
        }
        if (acc_row.acc_date_r) {
            this.AccountabilityForm.get('acc_date_r').setValue(new Date(this.AccountabilityForm.get('acc_date_r').value.toString().slice(0, -1)));
        }
    };
    // CREATE
    AccountabilityService.prototype.addNewAccountabilityRecord = function (accs) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('/accs/add/new', accs, { headers: headers });
    };
    // READ
    AccountabilityService.prototype.getAllAccountabilityRecords = function () {
        return this.http.get('/accs/rd/all');
    };
    // UPDATE
    AccountabilityService.prototype.editAccountabilityRecord = function (accs) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.put('/accs/upd/' + accs._id, accs, { headers: headers });
    };
    // DELETE
    AccountabilityService.prototype.deleteAccountabilityRecord = function (id) {
        return this.http.delete('/accs/del/' + id);
    };
    AccountabilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccountabilityService);
    return AccountabilityService;
}());



/***/ }),

/***/ "./src/app/services/authenticate.guard.ts":
/*!************************************************!*\
  !*** ./src/app/services/authenticate.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/services/authenticate.service.ts");




var AuthenticateGuard = /** @class */ (function () {
    function AuthenticateGuard(authenticate, router) {
        this.authenticate = authenticate;
        this.router = router;
    }
    AuthenticateGuard.prototype.canActivate = function () {
        if (this.authenticate.notLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthenticateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticateGuard);
    return AuthenticateGuard;
}());



/***/ }),

/***/ "./src/app/services/authenticate.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authenticate.service.ts ***!
  \**************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    // STORES THE USER INFORMATION TO THE LOCAL STORAGE OF THE BROWSER (FOUND IN DEVTOOLS-APPLICATION)
    AuthenticateService.prototype.storeUserDataToLocalStorage = function (token, users) {
        localStorage.setItem('key_id', token);
        localStorage.setItem('account', JSON.stringify(users));
        this.users = users;
        this.token = token;
    };
    // LOGOUT
    AuthenticateService.prototype.logout = function () {
        this.token = null;
        this.users = null;
        localStorage.clear();
    };
    // WHEN NOT LOGGED IN, ACCOUNT EXPIRED WITHIN ASSIGNED PERIOD
    AuthenticateService.prototype.notLoggedIn = function () {
        return this.jwtHelper.isTokenExpired(localStorage.getItem('key_id'));
    };
    // CHECKS USER ACCOUNT IF 'USERNAME' AND 'PASSWORD' EXISTS AND MATCHED
    AuthenticateService.prototype.authenticateUser = function (users) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/auth', users, { headers: headers });
    };
    AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        // EMPLOYEE FORMGROUP
        this.EmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            emp_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            emp_fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            emp_mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_hdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            emp_jtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            emp_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            emp_stat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            emp_fprint: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_skype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_domlog: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_badge: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_sfx: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            emp_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            __v: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    // For creating new entry
    EmployeeService.prototype.initialize = function () {
        this.EmployeeForm.setValue({
            _id: null,
            emp_id: null,
            emp_lname: null,
            emp_fname: null,
            emp_mname: null,
            emp_hdate: new Date,
            emp_jtitle: null,
            emp_dept: null,
            emp_stat: null,
            emp_fprint: null,
            emp_skype: null,
            emp_domlog: null,
            emp_badge: null,
            emp_sfx: null,
            emp_name: null,
            __v: null
        });
    };
    // For editing
    EmployeeService.prototype.populate = function (emp_row) {
        this.EmployeeForm.setValue(emp_row);
        if (emp_row.emp_hdate) {
            this.EmployeeForm.get('emp_hdate').setValue(new Date(this.EmployeeForm.get('emp_hdate').value.toString().slice(0, -1)));
        }
    };
    /* CRUD Activities */
    // CREATE
    EmployeeService.prototype.addNewEmployeeRecord = function (emps) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('/emps/add/new', emps, { headers: headers });
    };
    // READ
    EmployeeService.prototype.getAllEmployeeRecords = function () {
        return this.http.get('/emps/rd/all');
    };
    // UPDATE
    EmployeeService.prototype.editEmployeeRecord = function (emps) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.put('/emps/upd/' + emps._id, emps, { headers: headers });
    };
    // DELETE
    EmployeeService.prototype.deleteEmployeeRecord = function (id) {
        return this.http.delete('/emps/del/' + id);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/export.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/export.service.ts ***!
  \********************************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




// MIME type for .xlsx files
var EXCEL_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
// Excel extension
var EXCEL_EXTENSION = '.xlsx';
var ExportService = /** @class */ (function () {
    function ExportService() {
    }
    /* FOR PURCHASE ORDER */
    ExportService.prototype.exportPurchaseOrdersToExcelFile = function (tableData, excelFileName) {
        // Excel Worksheet
        var excelWorkSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(tableData, { header: [
                "po_id", "po_stat", "po_date", "po_d_rcvd", "po_s_name", "po_i_desc", "po_t", "po_client", "po_rcvr", "po_remarks"
            ]
        });
        // Column Headers
        var columnHeaders = [
            'PO ID',
            'PO Status',
            'Date Ordered',
            'Date Received',
            'Supplier Name',
            'Item Description',
            'Total Cost',
            'Client',
            'Item Receiver',
            'Remarks'
        ];
        /*
          // s = first cell // e = last cell // r = row // c = column
          // v = value
        */
        // Every cell that is not null
        var range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].decode_range(excelWorkSheet['!ref']);
        var row, column, letterInCellCode;
        for (var i = 0; i < columnHeaders.length; i++) {
            letterInCellCode = String.fromCharCode(64 + (i + 1));
            // AA - ZZ
            if (letterInCellCode == String.fromCharCode(90)) {
                excelWorkSheet[letterInCellCode + letterInCellCode + '1'].v = columnHeaders[i];
            }
            else {
                // A - Z
                excelWorkSheet[letterInCellCode + '1'].v = columnHeaders[i];
            }
        }
        // Converts date into readable date
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            var columnHeaderThatHasTheWordDateInIt = excelWorkSheet[letterInCellCode + '1'].v;
            if (columnHeaderThatHasTheWordDateInIt.includes("Date") || columnHeaderThatHasTheWordDateInIt.includes("date") || columnHeaderThatHasTheWordDateInIt.includes("DATE")) {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    if (row == 0) {
                        continue;
                    }
                    var newDateFormat = new Date(excelWorkSheet[letterInCellCode + (row + 1)].v);
                    excelWorkSheet[letterInCellCode + (row + 1)].v = newDateFormat.toDateString();
                }
            }
        }
        // Converts total price into P ### ### ###.00
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            var columnTitledTotalCost = excelWorkSheet[letterInCellCode + '1'].v;
            if (columnTitledTotalCost.includes("Total Cost") || columnTitledTotalCost.includes("TOTAL COST") || columnTitledTotalCost.includes("total cost")) {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    if (row == 0) {
                        continue;
                    }
                    var totalCostString = excelWorkSheet[letterInCellCode + (row + 1)].v;
                    var newTotalCostString;
                    var stringLength = totalCostString.toString().length;
                    if (stringLength >= 4) {
                        while (!(stringLength <= 0)) {
                            totalCostString = totalCostString.toString().substring(0, stringLength - 3) + " " + totalCostString.toString().substring(stringLength - 3);
                            stringLength -= 3;
                        }
                        newTotalCostString = "P" + totalCostString + ".00";
                    }
                    else {
                        newTotalCostString = "P " + totalCostString + ".00";
                    }
                    excelWorkSheet[letterInCellCode + (row + 1)].t = "s";
                    excelWorkSheet[letterInCellCode + (row + 1)].v = newTotalCostString;
                }
            }
        }
        // Deletes _id & __v Columns
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            if (excelWorkSheet[letterInCellCode + '1'].v == "_id" || excelWorkSheet[letterInCellCode + '1'].v == "__v") {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    delete excelWorkSheet[letterInCellCode + (row + 1)];
                }
            }
        }
        // Excel Workbook
        var excelWorkBook = { Sheets: { 'Records': excelWorkSheet }, SheetNames: ['Records'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](excelWorkBook, { bookType: 'xlsx', type: 'array' });
        // Save to Excel File
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /* FOR ACCOUNTABILITY */
    ExportService.prototype.exportAccountabilitiesToExcelFile = function (tableData, excelFileName) {
        // Excel Worksheet
        var excelWorkSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(tableData, {
            header: [
                "Acc_ID", "acc_date_i", "acc_date_r", "acc_rcvr_lname", "acc_rcvr_fname", "acc_rcvr_mname",
                "acc_rcvr_cn", "acc_rcvr_dept", "acc_rcvr_loc", "acc_i_name", "acc_i_clss", "acc_i_count",
                "acc_i_tnum", "acc_i_ser", "Acc_PO_ID", "Acc_PO_SupplierName", "Acc_InvoiceNumber", "acc_i_remarks"
            ]
        });
        // Column Headers
        var columnHeaders = [
            "Accountability ID",
            "Date Issued",
            "Date Received",
            "Last Name",
            "Given Name",
            "Middle Name",
            "Cellphone No.",
            "Department",
            "Location",
            "Item Burrowed",
            "Item Classification",
            "Quantity",
            "Tag Number",
            "Serial Number",
            "PO ID",
            "Supplier Name",
            "Invoice Number",
            "Remarks"
        ];
        /*
          // s = first cell // e = last cell // r = row // c = column
        */
        // Every cell that is not null
        var range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].decode_range(excelWorkSheet['!ref']);
        var row, column, letterInCellCode;
        for (var i = 0; i < columnHeaders.length; i++) {
            letterInCellCode = String.fromCharCode(64 + (i + 1));
            // AA - ZZ
            if (letterInCellCode == String.fromCharCode(90)) {
                excelWorkSheet[letterInCellCode + letterInCellCode + '1'].v = columnHeaders[i];
            }
            else {
                // A - Z
                excelWorkSheet[letterInCellCode + '1'].v = columnHeaders[i];
            }
        }
        // Converts date into readable date
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            var columnHeaderThatHasTheWordDateInIt = excelWorkSheet[letterInCellCode + '1'].v;
            if (columnHeaderThatHasTheWordDateInIt.includes("Date") || columnHeaderThatHasTheWordDateInIt.includes("date") || columnHeaderThatHasTheWordDateInIt.includes("DATE")) {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    if (row == 0) {
                        continue;
                    }
                    var newDateFormat = new Date(excelWorkSheet[letterInCellCode + (row + 1)].v);
                    excelWorkSheet[letterInCellCode + (row + 1)].v = newDateFormat.toDateString();
                }
            }
        }
        // Deletes _id & __v Columns
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            if (excelWorkSheet[letterInCellCode + '1'].v == "_id" || excelWorkSheet[letterInCellCode + '1'].v == "__v" || excelWorkSheet[letterInCellCode + '1'].v == "Accountability_ID") {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    delete excelWorkSheet[letterInCellCode + (row + 1)];
                }
            }
        }
        // Excel WorkBook
        var excelWorkBook = { Sheets: { 'Records': excelWorkSheet }, SheetNames: ['Records'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](excelWorkBook, { bookType: 'xlsx', type: 'array' });
        // Save to Excel File
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /* FOR EMPLOYEE */
    ExportService.prototype.exportEmployeeRecordToExcelFile = function (tableData, excelFileName) {
        // Excel Worksheet
        var excelWorkSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(tableData, {
            header: [
                "emp_stat", "emp_id", "emp_lname", "emp_fname", "emp_mname", "emp_sfx", "emp_hdate",
                "emp_jtitle", "emp_dept", "emp_fprint", "emp_skype", "emp_domlog", "emp_badge"
            ]
        });
        // Column Headers
        var columnHeaders = [
            "Status",
            "ID",
            "Last Name",
            "Given Name",
            "Middle Name",
            "Suffix",
            "Date Hired",
            "Job",
            "Department",
            "Fingerprint No.",
            "Skype ID",
            "Domain Log",
            "Badge ID"
        ];
        /*
          // s = first cell // e = last cell // r = row // c = column
          // v = value
        */
        // Every cell that is not null
        var range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].decode_range(excelWorkSheet['!ref']);
        var row, column, letterInCellCode;
        // From normal field names to proper field names
        for (var i = 0; i < columnHeaders.length; i++) {
            letterInCellCode = String.fromCharCode(64 + (i + 1));
            // AA - ZZ
            if (letterInCellCode == String.fromCharCode(90)) {
                excelWorkSheet[letterInCellCode + letterInCellCode + '1'].v = columnHeaders[i];
            }
            else {
                // A - Z
                excelWorkSheet[letterInCellCode + '1'].v = columnHeaders[i];
            }
        }
        // Converts date into readable date
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            var columnHeaderThatHasTheWordDateInIt = excelWorkSheet[letterInCellCode + '1'].v;
            // Checks if the field header includes "Date" or "date" or "DATE"
            if (columnHeaderThatHasTheWordDateInIt.includes("Date") || columnHeaderThatHasTheWordDateInIt.includes("date") || columnHeaderThatHasTheWordDateInIt.includes("DATE")) {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    if (row == 0) {
                        continue;
                    }
                    var newDateFormat = new Date(excelWorkSheet[letterInCellCode + (row + 1)].v);
                    excelWorkSheet[letterInCellCode + (row + 1)].v = newDateFormat.toDateString();
                }
            }
        }
        // Deletes _id, __v, & emp_name Columns
        for (column = range.s.c; column <= range.e.c; ++column) {
            letterInCellCode = String.fromCharCode(64 + (column + 1));
            if (excelWorkSheet[letterInCellCode + '1'].v == "_id" || excelWorkSheet[letterInCellCode + '1'].v == "__v" || excelWorkSheet[letterInCellCode + '1'].v == "emp_name") {
                for (row = range.s.r; row <= range.e.r; ++row) {
                    delete excelWorkSheet[letterInCellCode + (row + 1)];
                }
            }
        }
        // Excel Workbook
        var excelWorkBook = { Sheets: { 'Records': excelWorkSheet }, SheetNames: ['Records'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](excelWorkBook, { bookType: 'xlsx', type: 'array' });
        // Save to Excel File
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    // Save as excel
    ExportService.prototype.saveAsExcel = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_MIME_TYPE });
        var DateToday = new Date();
        var dateWhenExported = DateToday.getFullYear() + '-' + (DateToday.getMonth() + 1) + '-' + DateToday.getDate();
        var excelFileName = fileName + '_' + dateWhenExported;
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, excelFileName + EXCEL_EXTENSION);
    };
    ExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExportService);
    return ExportService;
}());



/***/ }),

/***/ "./src/app/services/purchase-order.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/purchase-order.service.ts ***!
  \****************************************************/
/*! exports provided: PurchaseOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderService", function() { return PurchaseOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var PurchaseOrderService = /** @class */ (function () {
    function PurchaseOrderService(http) {
        this.http = http;
        // PURCHASE ORDER FORMGROUP
        this.PurchaseOrderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            // Pattern: IT-<four 0-9 numbers>-<two 0-9 numbers>-<at least one 0-9 number>
            po_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('IT-([0-9]{4})-([0-9]{2})-([0-9]+)')]),
            po_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            po_s_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            po_i_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            po_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            po_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            po_rcvr: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            po_stat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            po_d_rcvd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            po_remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            __v: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.PurchaseOrderAddItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            po_i_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            // Pattern: any qty of 0-9 number
            po_i_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]),
            // Pattern: any qty of 0-9 number
            po_i_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]),
            po_ut: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    // Setting PurchaseOrderForm to its initial value
    PurchaseOrderService.prototype.initialize = function () {
        var _this = this;
        this.PurchaseOrderForm.setValue({
            _id: null,
            po_id: this.getLatestPOEntry().subscribe(function (result) {
                _this.PurchaseOrderForm.get('po_id').setValue(result);
            }),
            po_date: new Date,
            po_s_name: null,
            po_i_desc: null,
            po_t: null,
            po_client: null,
            po_rcvr: null,
            po_stat: null,
            po_d_rcvd: null,
            po_remarks: null,
            __v: null
        });
    };
    PurchaseOrderService.prototype.initializeNewItem = function () {
        this.PurchaseOrderForm.setValue({
            po_i_name: null,
            po_i_count: null,
            po_i_cost: null,
            po_ut: null
        });
    };
    // FILLING OUT EACH TEXTBOX WITH DATA
    PurchaseOrderService.prototype.populate = function (po_row) {
        this.PurchaseOrderForm.setValue(po_row);
        if (po_row.po_date) {
            this.PurchaseOrderForm.get('po_date').setValue(new Date(this.PurchaseOrderForm.get('po_date').value.toString().slice(0, -1)));
        }
        if (po_row.po_d_rcvd) {
            this.PurchaseOrderForm.get('po_d_rcvd').setValue(new Date(this.PurchaseOrderForm.get('po_d_rcvd').value.toString().slice(0, -1)));
        }
    };
    // Create
    PurchaseOrderService.prototype.addNewPurchaseOrderRecord = function (pos) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('/pos/add/new', pos, { headers: headers });
    };
    // Read
    PurchaseOrderService.prototype.getAllPurchaseOrderRecords = function () {
        return this.http.get('/pos/rd/all');
    };
    PurchaseOrderService.prototype.getLatestPOEntry = function () {
        return this.http.get('/pos/rd/id');
    };
    //Update
    PurchaseOrderService.prototype.editPurchaseOrderRecord = function (pos) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.put('/pos/upd/' + pos._id, pos, { headers: headers });
    };
    // Delete
    PurchaseOrderService.prototype.deletePurchaseOrderRecord = function (id) {
        return this.http.delete('/pos/del/' + id);
    };
    PurchaseOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PurchaseOrderService);
    return PurchaseOrderService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            user_lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            __v: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    // FILLING IN THE TEXTBOXES WITH BLANK DATA
    UserService.prototype.initialize = function () {
        this.UserForm.setValue({
            _id: null,
            user_lname: '',
            user_fname: '',
            user_mname: '',
            username: '',
            password: '',
            __v: null
        });
    };
    // FILLING OUT EACH TEXTBOX WITH DATA 
    UserService.prototype.populate = function (user_row) {
        this.UserForm.setValue(user_row);
    };
    /* CRUD Activities */
    // CREATE
    UserService.prototype.registerUser = function (users) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/add/new', users, { headers: headers });
    };
    // READ
    UserService.prototype.getAllUserAccounts = function () {
        return this.http.get('/users/rd/all');
    };
    // UPDATE
    UserService.prototype.editUserAccount = function (users) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.put('/users/upd/' + users._id, users, { headers: headers });
    };
    // DELETE
    UserService.prototype.deleteUserAccount = function (id) {
        return this.http.delete('/users/del/' + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\provproject\angular-src\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map