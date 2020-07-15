import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialogRef } from "@angular/material/dialog";

import { UserService } from "../../../../services/user.service";
import { AuthenticateService } from "../../../../services/authenticate.service";
import { FlashMessagesService } from 'angular2-flash-messages';

import { UserHomeComponent } from '../user-home/user-home.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  constructor(
    private alert: FlashMessagesService,
    public dialogRef: MatDialogRef<UserHomeComponent>,
    private userServices: UserService,
    private authenticate: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  // When 'SUBMIT' is clicked
  onSubmit() {
    // EDIT FUNCTIONALITY
    // ON EDIT
    this.userServices.editUserAccount(this.userServices.UserForm.value).subscribe(result => {

      if((result as any).success) {
        this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
        this.closeAfterSubmit();
        
      } else {
        this.closeAfterSubmit();
        this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
        console.log((result as any).err);
      }
    });
  }
  
  // After successful submit, popup form will close
  closeAfterSubmit() {
    this.dialogRef.close();
  }
}
