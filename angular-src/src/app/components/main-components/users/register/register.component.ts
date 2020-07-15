import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material/dialog";

import { UserService } from "../../../../services/user.service";
import { FlashMessagesService } from 'angular2-flash-messages';

import { HomeComponent } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private alert: FlashMessagesService,
    private userServices: UserService,
    public dialogRef: MatDialogRef<HomeComponent>
  ) { }

  ngOnInit() {
  }

  // When 'SUBMIT' is clicked
  onSubmit() {

    // Register User
    this.userServices.registerUser(this.userServices.UserForm.value).subscribe(result => {

      if((result as any).success) {
        this.alert.show("You are now registered!", {cssClass: 'alert-success', timeout: 3000});
        this.closeAfterSubmit();

      } else {
        this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
        console.log((result as any).err);
        this.userServices.UserForm.reset();
      }

    });
  }

  closeAfterSubmit() {
    this.dialogRef.close();
  }
}
