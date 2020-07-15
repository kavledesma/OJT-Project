import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { AccountabilityModel } from "../../../../properties/accountability.model";
import { AccountabilityAddEditComponent } from "../accountability-add-edit/accountability-add-edit.component";

import { AccountabilityService } from "../../../../services/accountability.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ExportService } from "../../../../services/export.service";

@Component({
  selector: 'app-accountability-home',
  templateUrl: './accountability-home.component.html',
  styleUrls: ['./accountability-home.component.css']
})
export class AccountabilityHomeComponent implements OnInit {
  @ViewChild (MatPaginator) paginator: MatPaginator;

  public AccountablityRecords = new MatTableDataSource<AccountabilityModel>();

  public AccountabilityColumns = [
    'Accountability_ID',
    'Accountability_DateIssued',
    'Accountability_DateReturned',
    'Accountability_ReceiverLastname',
    'Accountability_ReceiverFirstname',
    'Accountability_ReceiverMiddlename',
    'Accountability_ReceiverCellphoneNumber',
    'Accountability_ReceiverDepartment',
    'Accountability_ReceiverLocation',
    'Accountability_BurrowedItemName',
    'Accountability_ItemClassification',
    'Accountability_ItemQuantity',
    'Accountability_ItemTagNumber',
    'Accountability_ItemSerialNumber',
    'Accountability_PO_ID',
    'Accountability_PO_SupplierName',
    'Accountability_InvoiceNumber',
    'Accountability_Remarks',
    'Edit/DeleteButtons'
  ];

  constructor(
    private dialog: MatDialog,
    private alert: FlashMessagesService,
    private exportToExcel: ExportService,
    private accountablityServices: AccountabilityService
  ) { }

  ngOnInit() {
    this.getAllAccountabalityRecords();
  }

  // PAGINATOR
  ngAfterViewInit() {
    this.AccountablityRecords.paginator = this.paginator;
  }

  // SEARCH DATA FUNCTIONALITY
  public Search(value: string) {
    this.AccountablityRecords.filter = value.trim().toLowerCase();
  }

  // Exports to Excel
  public exportAccountabilityRecordToExcel() {
    this.exportToExcel.exportAccountabilitiesToExcelFile(this.AccountablityRecords.data, 'PROV_Accountabilites');
  }

  /* CRUD Activities */
  // CREATE
  public onAddAccountability() {
    this.accountablityServices.initialize();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "1092px";
    dialogConfig.height = "583px";
    dialogConfig.autoFocus = true;
    this.dialog.open(AccountabilityAddEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllAccountabalityRecords();
        this.accountablityServices.AccountabilityForm.reset();
      });
  }

  // READ
  public getAllAccountabalityRecords = () => {
    this.accountablityServices.getAllAccountabilityRecords().subscribe(result => {
      this.AccountablityRecords.data = result as AccountabilityModel[];
    });
  }

  // UPDATE
  public onEditAccountability(acc_row) {
    this.accountablityServices.populate(acc_row)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "1092px";
    dialogConfig.height = "583px";
    dialogConfig.autoFocus = true;
    this.dialog.open(AccountabilityAddEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllAccountabalityRecords();
      });
  }

  // DELETE
  public onDeleteAccountability(id) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.accountablityServices.deleteAccountabilityRecord(id).subscribe(result => {
        if ((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.getAllAccountabalityRecords();
        } else {
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          console.log((result as any).err);
        }
      }); 
    }
  }
}
