import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material/dialog";

import { PurchaseOrderService } from "../../../../../services/purchase-order.service";
import { PurchaseOrderAddEditComponent } from '../purchase-order-add-edit.component';

@Component({
  selector: 'app-purchase-order-add-item',
  templateUrl: './purchase-order-add-item.component.html',
  styleUrls: ['./purchase-order-add-item.component.css']
})
export class PurchaseOrderAddItemComponent implements OnInit {
  count: number = 0;
  item_name: string[] = [];
  item_cost: number[] = [];
  item_count: number[] = [];
  unit_total: number[] = [];
  
  constructor(
    private purchaseOrderServices: PurchaseOrderService,
    public dialogRef: MatDialogRef<PurchaseOrderAddEditComponent>,
  ) { }

  ngOnInit() {
  }

  public computeForTotalCost() {
    return (this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_cost * this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_count);
  }

  // Items to array
  addToArray() {
    // Arrays
    this.item_name.push(this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_name);
    this.item_cost.push(this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_cost);
    this.item_count.push(this.purchaseOrderServices.PurchaseOrderAddItemForm.value.po_i_count);
    this.unit_total.push(this.computeForTotalCost());

    // Displays the items added to the console
    console.log("Item Name: " + this.item_name[this.count] + "   " + "Item Qty: " + this.item_count[this.count] + "   " + "Item Cost: " + this.item_count[this.count] + "   " + "Total: " + this.computeForTotalCost());

    this.count++;

    this.purchaseOrderServices.PurchaseOrderAddItemForm.reset();
  }

  // Saving
  compileDataFromArray() {
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
  }

  // After successful submit, popup form will close
  closePopUpAfterSubmit() {
    this.purchaseOrderServices.PurchaseOrderAddItemForm.reset();
    this.dialogRef.close();
  }
}
