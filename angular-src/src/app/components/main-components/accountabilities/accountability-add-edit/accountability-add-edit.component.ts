import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material/dialog";

import { AccountabilityService } from "../../../../services/accountability.service";
import { FlashMessagesService } from "angular2-flash-messages";

import { AccountabilityHomeComponent } from '../accountability-home/accountability-home.component';

@Component({
  selector: 'app-accountability-add-edit',
  templateUrl: './accountability-add-edit.component.html',
  styleUrls: ['./accountability-add-edit.component.css']
})
export class AccountabilityAddEditComponent implements OnInit {
  id: string;
  suppname: string;

  constructor(
    private alert: FlashMessagesService,
    public dialogRef: MatDialogRef<AccountabilityHomeComponent>,
    private accountabilityServices: AccountabilityService
  ) { }

  ngOnInit() {
  }

  // WHEN 'SUBMIT' IS CLICKED
  onSubmit() {
    /* ADD & EDIT FUNCTIONALITY */
    // ON ADD
    if (!this.accountabilityServices.AccountabilityForm.get('_id').value) {
      this.accountabilityServices.addNewAccountabilityRecord(this.accountabilityServices.AccountabilityForm.value).subscribe(result => {

        if((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.closePopUpAfterSubmit();

        } else {
          this.closePopUpAfterSubmit();
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          console.log((result as any).err);
        }
      });

    // ON EDIT
    } else {
      this.accountabilityServices.editAccountabilityRecord(this.accountabilityServices.AccountabilityForm.value).subscribe(result => {

        if((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.closePopUpAfterSubmit();
          
        } else {
          this.closePopUpAfterSubmit();
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          console.log((result as any).err);
        }
      });
    }
  }
  
  // After successful submit, popup form will close
  closePopUpAfterSubmit() {
    this.accountabilityServices.AccountabilityForm.reset();
    this.dialogRef.close();
  }
}
