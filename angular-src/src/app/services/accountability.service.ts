import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AccountabilityService {
  constructor( private http: HttpClient ) { }

  // ACCOUNTABILITY FORMGROUP
  AccountabilityForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    // Pattern: ACC-<four 0-9 numbers>-<two 0-9 numbers>-<at least 3 consecutive 0-9 numbers>
    Acc_ID: new FormControl('', Validators.pattern('ACC-([0-9]{4})-([0-9]{2})-([0-9]{3,})')),
    acc_rcvr_lname: new FormControl('', Validators.required),
    acc_rcvr_fname: new FormControl('', Validators.required),
    acc_rcvr_mname: new FormControl(''),
    // Pattern: any qty of 0-9 number
    acc_rcvr_cn: new FormControl('', Validators.pattern('[0-9]*')),
    acc_rcvr_dept: new FormControl('', Validators.required),
    acc_rcvr_loc: new FormControl(''),
    acc_date_i: new FormControl('', Validators.required),
    acc_date_r: new FormControl(''),
    acc_i_name: new FormControl('', Validators.required),
    acc_i_clss: new FormControl('', Validators.required),
    // Pattern: any qty of 0-9 number
    acc_i_count: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    acc_i_ser: new FormControl('', Validators.required),
    acc_i_tnum: new FormControl('', Validators.required),
    acc_i_remarks: new FormControl(''),
    // Pattern: IT-<four 0-9 numbers>-<two 0-9 numbers>-<at least one 0-9 number>
    Acc_PO_ID: new FormControl('', Validators.pattern('IT-([0-9]{4})-([0-9]{2})-([0-9]+)')),
    Acc_PO_SupplierName: new FormControl('', Validators.required),
    Acc_InvoiceNumber: new FormControl(''),
    __v: new FormControl(null)
  });

  // FILLING IN THE TEXTBOXES WITH BLANK DATA
  initialize() {
    this.AccountabilityForm.setValue({
      _id: null,
      Acc_ID: null,
      acc_rcvr_lname: null,
      acc_rcvr_fname: null,
      acc_rcvr_mname: null,
      acc_rcvr_cn: null,
      acc_rcvr_dept: null,
      acc_rcvr_loc: null,
      acc_date_i: new Date,
      acc_date_r: null,
      acc_i_name: null,
      acc_i_clss: null,
      acc_i_count: null,
      acc_i_ser: null,
      acc_i_tnum: null,
      acc_i_remarks: null,
      Acc_PO_ID: null,
      Acc_PO_SupplierName: null,
      Acc_InvoiceNumber: null,
      __v: null
    });
  }

  // FILLING UP EACH TEXTBOX WITH DATA
  populate(acc_row) {
    this.AccountabilityForm.setValue(acc_row);

    if (acc_row.acc_date_i){
      this.AccountabilityForm.get('acc_date_i').setValue(new Date(this.AccountabilityForm.get('acc_date_i').value.toString().slice(0, -1)));
    }

    if (acc_row.acc_date_r){
      this.AccountabilityForm.get('acc_date_r').setValue(new Date(this.AccountabilityForm.get('acc_date_r').value.toString().slice(0, -1)));
    }
  }

  // CREATE
  addNewAccountabilityRecord(accs) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('/accs/add/new', accs, {headers: headers});
  }

  // READ
  getAllAccountabilityRecords() {
    return this.http.get('/accs/rd/all');
  }

  // UPDATE
  editAccountabilityRecord(accs) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.put('/accs/upd/'+accs._id, accs, {headers: headers});
  }

  // DELETE
  deleteAccountabilityRecord(id) {
    return this.http.delete('/accs/del/'+id);
  }
}
