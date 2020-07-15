import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

// MIME type for .xlsx files
const EXCEL_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
// Excel extension
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  /* FOR PURCHASE ORDER */
  public exportPurchaseOrdersToExcelFile(tableData: any[], excelFileName: string) {

    // Excel Worksheet
    const excelWorkSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tableData,
      { header: [
        "po_id", "po_stat", "po_date", "po_d_rcvd", "po_s_name", "po_i_desc", "po_t", "po_client", "po_rcvr", "po_remarks"
        ]
      });

    // Column Headers
    var columnHeaders = [
      'PO ID',
      'PO Status',
      'Date Ordered',
      'Date Received',
      'Supplier Name',
      'Item Description',
      'Total Cost',
      'Client',
      'Item Receiver',
      'Remarks'
    ];

    /*
      // s = first cell // e = last cell // r = row // c = column
      // v = value
    */
    // Every cell that is not null
    var range = XLSX.utils.decode_range(excelWorkSheet['!ref']);
    var row, column, letterInCellCode;

    for (var i = 0; i < columnHeaders.length; i++) {
      letterInCellCode = String.fromCharCode(64 + (i+1));

      // AA - ZZ
      if (letterInCellCode == String.fromCharCode(90)) {
        excelWorkSheet[letterInCellCode + letterInCellCode + '1'].v = columnHeaders[i];
      } else {
      // A - Z
        excelWorkSheet[letterInCellCode + '1'].v = columnHeaders[i];
      }
    }

    // Converts date into readable date
    for (column = range.s.c; column <= range.e.c; ++column)  {
      letterInCellCode = String.fromCharCode(64 + (column + 1));
      var columnHeaderThatHasTheWordDateInIt = excelWorkSheet[letterInCellCode + '1'].v;
      
      if (columnHeaderThatHasTheWordDateInIt.includes("Date") || columnHeaderThatHasTheWordDateInIt.includes("date") || columnHeaderThatHasTheWordDateInIt.includes("DATE")) {
        for (row = range.s.r; row <= range.e.r; ++row) {
          if (row == 0) {
            continue;
          }
          var newDateFormat = new Date(excelWorkSheet[letterInCellCode + (row+1)].v);
          excelWorkSheet[letterInCellCode + (row+1)].v = newDateFormat.toDateString();
        }
      }
    }

    // Converts total price into P ### ### ###.00
    for (column = range.s.c; column <= range.e.c; ++column)  {
      letterInCellCode = String.fromCharCode(64 + (column + 1));
      var columnTitledTotalCost = excelWorkSheet[letterInCellCode + '1'].v;
      
      if (columnTitledTotalCost.includes("Total Cost") || columnTitledTotalCost.includes("TOTAL COST") || columnTitledTotalCost.includes("total cost")) {
        for (row = range.s.r; row <= range.e.r; ++row) {
          if (row == 0) {
            continue;
          }

          var totalCostString = excelWorkSheet[letterInCellCode + (row+1)].v;
          var newTotalCostString;
          var stringLength = totalCostString.toString().length;

          if (stringLength >= 4) {
            while (!(stringLength <= 0)) {
              totalCostString = totalCostString.toString().substring(0, stringLength - 3) + " " + totalCostString.toString().substring(stringLength - 3);
              stringLength -= 3;
            }
            newTotalCostString = "P" + totalCostString + ".00";
          } else {
            newTotalCostString = "P " + totalCostString + ".00";
          }

          excelWorkSheet[letterInCellCode + (row+1)].t = "s";
          excelWorkSheet[letterInCellCode + (row+1)].v = newTotalCostString;
        }
      }
    }

    // Deletes _id & __v Columns
    for (column = range.s.c; column <= range.e.c; ++column) {
      letterInCellCode = String.fromCharCode(64 + (column + 1));

      if (excelWorkSheet[letterInCellCode + '1'].v == "_id" || excelWorkSheet[letterInCellCode + '1'].v == "__v") {
        for (row = range.s.r; row <= range.e.r; ++row) {
          delete excelWorkSheet[letterInCellCode+(row+1)]
        }
      }
    }

    // Excel Workbook
    const excelWorkBook: XLSX.WorkBook = { Sheets: {'Records': excelWorkSheet}, SheetNames: ['Records'] };
    const excelBuffer: any = XLSX.write(excelWorkBook, { bookType: 'xlsx', type: 'array' });

    // Save to Excel File
    this.saveAsExcel(excelBuffer, excelFileName);
  }



  /////////////////////////////////////////////////////////////////////////////////////////////////////



  /* FOR ACCOUNTABILITY */
  public exportAccountabilitiesToExcelFile(tableData: any[], excelFileName: string) {

    // Excel Worksheet
    const excelWorkSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tableData,
      {
        header: [
          "Acc_ID", "acc_date_i", "acc_date_r", "acc_rcvr_lname", "acc_rcvr_fname", "acc_rcvr_mname",
          "acc_rcvr_cn", "acc_rcvr_dept", "acc_rcvr_loc", "acc_i_name", "acc_i_clss", "acc_i_count", 
          "acc_i_tnum", "acc_i_ser", "Acc_PO_ID", "Acc_PO_SupplierName", "Acc_InvoiceNumber", "acc_i_remarks"
        ]
      });

    // Column Headers
    var columnHeaders = [
      "Accountability ID",
      "Date Issued",
      "Date Received",
      "Last Name",
      "Given Name",
      "Middle Name",
      "Cellphone No.",
      "Department",
      "Location",
      "Item Burrowed",
      "Item Classification",
      "Quantity",
      "Tag Number",
      "Serial Number",
      "PO ID",
      "Supplier Name",
      "Invoice Number",
      "Remarks"
    ];

    /* 
      // s = first cell // e = last cell // r = row // c = column
    */
    // Every cell that is not null
    var range = XLSX.utils.decode_range(excelWorkSheet['!ref']);
    var row, column, letterInCellCode;

    for (var i = 0; i < columnHeaders.length; i++) {
      letterInCellCode = String.fromCharCode(64 + (i+1));

      // AA - ZZ
      if (letterInCellCode == String.fromCharCode(90)) {
        excelWorkSheet[letterInCellCode + letterInCellCode + '1'].v = columnHeaders[i];
      } else {
      // A - Z
        excelWorkSheet[letterInCellCode + '1'].v = columnHeaders[i];
      }
    }

    // Converts date into readable date
    for (column = range.s.c; column <= range.e.c; ++column)  {
      letterInCellCode = String.fromCharCode(64 + (column + 1));
      var columnHeaderThatHasTheWordDateInIt = excelWorkSheet[letterInCellCode + '1'].v;
      
      if (columnHeaderThatHasTheWordDateInIt.includes("Date") || columnHeaderThatHasTheWordDateInIt.includes("date") || columnHeaderThatHasTheWordDateInIt.includes("DATE")) {
        for (row = range.s.r; row <= range.e.r; ++row) {
          if (row == 0) {
            continue;
          }
          var newDateFormat = new Date(excelWorkSheet[letterInCellCode + (row+1)].v);
          excelWorkSheet[letterInCellCode + (row+1)].v = newDateFormat.toDateString();
        }
      }
    }

    // Deletes _id & __v Columns
    for (column = range.s.c; column <= range.e.c; ++column) {
      letterInCellCode = String.fromCharCode(64 + (column + 1));

      if (excelWorkSheet[letterInCellCode + '1'].v == "_id" || excelWorkSheet[letterInCellCode + '1'].v == "__v" || excelWorkSheet[letterInCellCode + '1'].v == "Accountability_ID") {
        for (row = range.s.r; row <= range.e.r; ++row) {
          delete excelWorkSheet[letterInCellCode+(row+1)]
        }
      }
    }

    // Excel WorkBook
    const excelWorkBook: XLSX.WorkBook = { Sheets: {'Records': excelWorkSheet}, SheetNames: ['Records'] };
    const excelBuffer: any = XLSX.write(excelWorkBook, { bookType: 'xlsx', type: 'array' });

    // Save to Excel File
    this.saveAsExcel(excelBuffer, excelFileName);
  }



  /////////////////////////////////////////////////////////////////////////////////////////////////////



  /* FOR EMPLOYEE */
  public exportEmployeeRecordToExcelFile(tableData: any[], excelFileName: string) {

    // Excel Worksheet
    const excelWorkSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tableData,
      {
        header: [
          "emp_stat", "emp_id", "emp_lname", "emp_fname", "emp_mname", "emp_sfx", "emp_hdate", 
          "emp_jtitle", "emp_dept", "emp_fprint", "emp_skype", "emp_domlog", "emp_badge"
        ]
      });
    
    // Column Headers
    var columnHeaders = [
      "Status",
      "ID",
      "Last Name",
      "Given Name",
      "Middle Name",
      "Suffix",
      "Date Hired",
      "Job",
      "Department",
      "Fingerprint No.",
      "Skype ID",
      "Domain Log",
      "Badge ID"
    ];

    /*
      // s = first cell // e = last cell // r = row // c = column
      // v = value
    */
    // Every cell that is not null
    var range = XLSX.utils.decode_range(excelWorkSheet['!ref']);
    var row, column, letterInCellCode;

    // From normal field names to proper field names
    for (var i = 0; i < columnHeaders.length; i++) {
      letterInCellCode = String.fromCharCode(64 + (i+1));

      // AA - ZZ
      if (letterInCellCode == String.fromCharCode(90)) {
        excelWorkSheet[letterInCellCode + letterInCellCode + '1'].v = columnHeaders[i];
      } else {
      // A - Z
        excelWorkSheet[letterInCellCode + '1'].v = columnHeaders[i];
      }
    }

    // Converts date into readable date
    for (column = range.s.c; column <= range.e.c; ++column)  {
      letterInCellCode = String.fromCharCode(64 + (column + 1));
      var columnHeaderThatHasTheWordDateInIt = excelWorkSheet[letterInCellCode + '1'].v;
      
      // Checks if the field header includes "Date" or "date" or "DATE"
      if (columnHeaderThatHasTheWordDateInIt.includes("Date") || columnHeaderThatHasTheWordDateInIt.includes("date") || columnHeaderThatHasTheWordDateInIt.includes("DATE")) {
        for (row = range.s.r; row <= range.e.r; ++row) {
          if (row == 0) {
            continue;
          }
          var newDateFormat = new Date(excelWorkSheet[letterInCellCode + (row+1)].v);
          excelWorkSheet[letterInCellCode + (row+1)].v = newDateFormat.toDateString();
        }
      }
    }

    // Deletes _id, __v, & emp_name Columns
    for (column = range.s.c; column <= range.e.c; ++column) {
      letterInCellCode = String.fromCharCode(64 + (column + 1));

      if (excelWorkSheet[letterInCellCode + '1'].v == "_id" || excelWorkSheet[letterInCellCode + '1'].v == "__v" || excelWorkSheet[letterInCellCode + '1'].v == "emp_name") {
        for (row = range.s.r; row <= range.e.r; ++row) {
          delete excelWorkSheet[letterInCellCode+(row+1)]
        }
      }
    }

    // Excel Workbook
    const excelWorkBook: XLSX.WorkBook = { Sheets: {'Records': excelWorkSheet}, SheetNames: ['Records'] };
    const excelBuffer: any = XLSX.write(excelWorkBook, { bookType: 'xlsx', type: 'array' });

    // Save to Excel File
    this.saveAsExcel(excelBuffer, excelFileName);
  }

  // Save as excel
  private saveAsExcel(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], { type: EXCEL_MIME_TYPE });

    const DateToday = new Date();
    const dateWhenExported = DateToday.getFullYear() + '-' + (DateToday.getMonth() + 1) + '-' + DateToday.getDate();
    const excelFileName = fileName + '_' + dateWhenExported;

    FileSaver.saveAs(data, excelFileName + EXCEL_EXTENSION);
  }
}
