import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material/dialog";

import { AuthenticateService } from "../../../../services/authenticate.service";
import { UserService } from "../../../../services/user.service";

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { HomeComponent } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
    private authenticate: AuthenticateService,
    private alert: FlashMessagesService,
    private userServices: UserService,
    public dialogRef: MatDialogRef<HomeComponent>
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {

    this.authenticate.authenticateUser(this.userServices.LoginForm.value).subscribe(result => {

      if ((result as any).success) {
        this.authenticate.storeUserDataToLocalStorage((result as any).token, (result as any).userinfo);
        this.alert.show("You are now logged in.", {cssClass: 'alert-success', timeout: 3000});
        this.closeAfterSubmit();
        this.route.navigate(['/dashboard']);

      } else {
        this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
        console.log((result as any).err);
        this.userServices.LoginForm.reset();
      }
    });
  }

  // After successful submit, popup form will close
  closeAfterSubmit() {
    this.userServices.LoginForm.reset();
    this.dialogRef.close();
  }
}