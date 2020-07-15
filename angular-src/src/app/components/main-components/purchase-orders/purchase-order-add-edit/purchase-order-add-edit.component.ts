import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";

import { PurchaseOrderService } from "../../../../services/purchase-order.service";
import { FlashMessagesService } from "angular2-flash-messages";

import { PurchaseOrderHomeComponent } from '../purchase-order-home/purchase-order-home.component';
import { PurchaseOrderAddItemComponent } from './purchase-order-add-item/purchase-order-add-item.component';

@Component({
  selector: 'app-purchase-order-add-edit',
  templateUrl: './purchase-order-add-edit.component.html',
  styleUrls: ['./purchase-order-add-edit.component.css']
})
export class PurchaseOrderAddEditComponent implements OnInit {

  constructor(
    private alert: FlashMessagesService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PurchaseOrderHomeComponent>,
    private purchaseOrderServices: PurchaseOrderService,
  ) { }

  ngOnInit() {
  }

  public onAddNewItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(PurchaseOrderAddItemComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.purchaseOrderServices.PurchaseOrderAddItemForm.reset();
      });
  }

  // After SUBMIT
  public onSubmit() {

    // ADD & EDIT FUNCTIONALITY
    // ON ADD
    if (!this.purchaseOrderServices.PurchaseOrderForm.get('_id').value) {
      this.purchaseOrderServices.addNewPurchaseOrderRecord(this.purchaseOrderServices.PurchaseOrderForm.value).subscribe(result => {

        if((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.closePopUpAfterSubmit();

        } else {
          this.closePopUpAfterSubmit();
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          if ((result as any).err == "undefined") {
            console.log("No errors occured! Yey!");
          } else {
            console.log("An error has encountered: " + (result as any).err);
          }
        }
        
      });

    // ON EDIT
    } else { 
      this.purchaseOrderServices.editPurchaseOrderRecord(this.purchaseOrderServices.PurchaseOrderForm.value).subscribe(result => {

        if((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.closePopUpAfterSubmit();
          
        } else {
          this.closePopUpAfterSubmit();
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          if ((result as any).err == "undefined") {
            console.log("No errors occured! Yey!");
          } else {
            console.log("An error has encountered: " + (result as any).err);
          }
        }
        
      });
    }
  }

  // After successful submit, popup form will close
  closePopUpAfterSubmit() {
    this.purchaseOrderServices.PurchaseOrderForm.reset();
    this.dialogRef.close();
  }
}
