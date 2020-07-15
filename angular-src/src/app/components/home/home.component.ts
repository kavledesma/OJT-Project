import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { LoginComponent } from "../main-components/users/login/login.component";
import { RegisterComponent } from "../main-components/users/register/register.component";

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private userServices: UserService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "308px";
    dialogConfig.width = "623px";
    this.dialog.open(LoginComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.userServices.LoginForm.reset();
      });
  }

  onRegister() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(RegisterComponent, dialogConfig)
      .afterClosed().subscribe(result => {        
        if (this.userServices.UserForm.invalid == true) {
          this.userServices.UserForm.reset();
        } else {
          this.userServices.UserForm.reset();
          this.onLogin();
        }
      });
  }

}
