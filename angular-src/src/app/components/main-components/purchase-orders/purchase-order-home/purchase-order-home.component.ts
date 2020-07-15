import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { PurchaseOrderModel } from "../../../../properties/purchase-order.model";
import { PurchaseOrderAddEditComponent } from "../purchase-order-add-edit/purchase-order-add-edit.component";

import { PurchaseOrderService } from "../../../../services/purchase-order.service";
import { ExportService } from "../../../../services/export.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-purchase-order-home',
  templateUrl: './purchase-order-home.component.html',
  styleUrls: ['./purchase-order-home.component.css']
})
export class PurchaseOrderHomeComponent implements OnInit {
  @ViewChild (MatPaginator) paginator: MatPaginator;

  public PurchaseOrderRecords = new MatTableDataSource<PurchaseOrderModel>();

  public PurchaseOrderColumns = [
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

  constructor(
    private dialog: MatDialog,
    private alert: FlashMessagesService,
    private exportToExcel: ExportService,
    private purchaseOrderServices: PurchaseOrderService
  ) { }

  ngOnInit() {
    this.getAllPurchaseOrderRecords();
  }

  // PAGINATOR
  ngAfterViewInit() {
    this.PurchaseOrderRecords.paginator = this.paginator;
  }

  // SEARCH DATA FUNCTIONALITY
  public Search(value: string) {
    this.PurchaseOrderRecords.filter = value.trim().toLowerCase();
  }

  // Export to Excel
  public exportPurchaseOrderRecordToExcel() {
    this.exportToExcel.exportPurchaseOrdersToExcelFile(this.PurchaseOrderRecords.data, 'PROV_PurchaseOrders');
  }

  /* CRUD Activities */
  // CREATE
  public onAddPurchaseOrder() {
    this.purchaseOrderServices.initialize();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "1098px";
    dialogConfig.height = "478px";
    dialogConfig.autoFocus = true;
    this.dialog.open(PurchaseOrderAddEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllPurchaseOrderRecords();
        this.purchaseOrderServices.PurchaseOrderForm.reset();
      });
  }

  // READ
  public getAllPurchaseOrderRecords = () => {
    this.purchaseOrderServices.getAllPurchaseOrderRecords().subscribe(result => {
      this.PurchaseOrderRecords.data = result as PurchaseOrderModel[];
    });
  }

  // UPDATE
  public onEditPurchaseOrder(po_row) {
    this.purchaseOrderServices.populate(po_row)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "1098px";
    dialogConfig.height = "478px";
    dialogConfig.autoFocus = true;
    this.dialog.open(PurchaseOrderAddEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllPurchaseOrderRecords();
      });
  }

  // DELETE
  public onDeletePurchaseOrder(id) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.purchaseOrderServices.deletePurchaseOrderRecord(id).subscribe(result => {
        if ((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.getAllPurchaseOrderRecords();
        } else {
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          console.log((result as any).err);
        }
      }); 
    }
  }
}
