import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { UserModel } from "../../../../properties/users.model";
import { UserEditComponent } from '../user-edit/user-edit.component';
import { RegisterComponent } from '../register/register.component';

import { UserService } from "../../../../services/user.service";
import { AuthenticateService } from "../../../../services/authenticate.service";

import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public UserAccounts = new MatTableDataSource<UserModel>();

  public UserColumns = [
    'User_LastName', 
    'User_FirstName', 
    'User_MiddleName',
    'User_Username', 
    'User_Password', 
    'Edit/DeleteButtons'
  ]; 
  
  constructor (
    private alert: FlashMessagesService,
    private dialog: MatDialog,
    private router: Router,
    private userServices: UserService,
    private authenticate: AuthenticateService
    ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  // PAGINATOR
  ngAfterViewInit() {
    this.UserAccounts.paginator = this.paginator;
  }

  // SEARCH DATA FUNCTIONALITY
  Search(value: String) {
    this.UserAccounts.filter = value.trim().toLowerCase();
  } 

  /* CRUD Activities */
  onAddUserAccount() {
    this.userServices.initialize();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(RegisterComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.userServices.UserForm.reset();
        this.getAllUsers();
      });
  }

  // READ
  getAllUsers = () => {
    this.userServices.getAllUserAccounts().subscribe(result => {
      this.UserAccounts.data = result as UserModel[];
    });
  }

  // UPDATE
  onEditUserAccount(user_row) {
    this.userServices.populate(user_row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(UserEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllUsers();
      });
  }
  
  // DELETE
  onDeleteUserAccount(id) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.userServices.deleteUserAccount(id).subscribe(result => {
        if ((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.getAllUsers();

          // logs out if logged-in account was deleted
          if (localStorage.getItem('account').includes(id) == true) {
            this.authenticate.logout();
            this.router.navigate(['/']);
            this.alert.show("You are logged out.", {cssClass: 'alert-success', timeout: 3000});
          }
          
        } else {
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          console.log((result as any).err);
        }
      });
    }
  }
}
