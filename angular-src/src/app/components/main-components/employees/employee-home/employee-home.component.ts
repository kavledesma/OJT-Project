import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { EmployeeModel } from "../../../../properties/employee.model";
import { EmployeeAddEditComponent } from "../employee-add-edit/employee-add-edit.component";

import { EmployeeService } from "../../../../services/employee.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ExportService } from "../../../../services/export.service";

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  @ViewChild (MatPaginator) paginator: MatPaginator;

  public EmployeeRecords = new MatTableDataSource<EmployeeModel>();

  public EmployeeColumns = [
    'Employee_Status', 
    'Employee_ID', 
    'Employee_LastName', 
    'Employee_FirstName',
    'Employee_MiddleName', 
    'Employee_Suffix', 
    'Employee_HireDate', 
    'Employee_JobTitle',
    'Employee_Department', 
    'Employee_FingerprintNumber', 
    'Employee_SkypeID', 
    'Employee_DomainLog',
    'Employee_BadgeID', 
    'Edit/DeleteButtons'
  ];

  constructor(
    private dialog: MatDialog,
    private alert: FlashMessagesService,
    private exportToExcel: ExportService,
    private employeeServices: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  // PAGINATOR
  ngAfterViewInit(): void {
    this.EmployeeRecords.paginator = this.paginator;
  }

  // SEARCH DATA FUNCTIONALITY
  public Search(value: String) {
    this.EmployeeRecords.filter = value.trim().toLowerCase();
  } 

  // Exports to Excel
  public exportEmployeeRecordToExcel() {
    this.exportToExcel.exportEmployeeRecordToExcelFile(this.EmployeeRecords.data, 'PROV_Employees');
  }

  /* CRUD Activities */
  // CREATE
  public onAddEmployee() {
    this.employeeServices.initialize();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "581px";
    dialogConfig.width = "1092px";
    this.dialog.open(EmployeeAddEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllEmployees();
        this.employeeServices.EmployeeForm.reset();
      });
  }

  // READ
  public getAllEmployees = () => {
    this.employeeServices.getAllEmployeeRecords().subscribe(result => {
      this.EmployeeRecords.data = result as EmployeeModel[];
    });
  }

  // UPDATE
  public onEditEmployee(emp_row) {
    this.employeeServices.populate(emp_row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "581px";
    dialogConfig.width = "1092px";
    this.dialog.open(EmployeeAddEditComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        this.getAllEmployees();
      });
  }

  // DELETE
  public onDeleteEmployee(id) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.employeeServices.deleteEmployeeRecord(id).subscribe(result => {
        if ((result as any).success) {
          this.alert.show((result as any).msg, {cssClass: 'alert-success', timeout: 3000});
          this.getAllEmployees();
        } else {
          this.alert.show((result as any).msg, {cssClass: 'alert-danger', timeout: 3000});
          console.log((result as any).err);
        }
      }); 
    }
  }
}
