import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material/dialog";

import { EmployeeService } from "../../../../services/employee.service";
import { FlashMessagesService } from "angular2-flash-messages";

import { EmployeeHomeComponent } from '../employee-home/employee-home.component';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {

  constructor(
    private alert: FlashMessagesService,
    public dialogRef: MatDialogRef<EmployeeHomeComponent>,
    private employeeServices: EmployeeService
  ) { }

  ngOnInit() {
  }

  // When 'SUBMIT' is clicked
  onSubmit() {
    /* ADD & EDIT FUNCTIONALITY */
    // ON ADD
    if (!this.employeeServices.EmployeeForm.get('_id').value) {
      this.employeeServices.addNewEmployeeRecord(this.employeeServices.EmployeeForm.value).subscribe(result => {

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
      this.employeeServices.editEmployeeRecord(this.employeeServices.EmployeeForm.value).subscribe(result => {

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
    this.employeeServices.EmployeeForm.reset();
    this.dialogRef.close();
  }
}
