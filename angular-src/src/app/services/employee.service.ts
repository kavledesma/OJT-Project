import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private http: HttpClient ) { }

  // EMPLOYEE FORMGROUP
  EmployeeForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    emp_id: new FormControl(''),
    emp_lname: new FormControl('', Validators.required),
    emp_fname: new FormControl('', Validators.required),
    emp_mname: new FormControl(''),
    emp_hdate: new FormControl('', Validators.required),
    emp_jtitle: new FormControl('', Validators.required),
    emp_dept: new FormControl('', Validators.required),
    emp_stat: new FormControl('', Validators.required),
    emp_fprint: new FormControl(''),
    emp_skype: new FormControl(''),
    emp_domlog: new FormControl(''),
    emp_badge: new FormControl(''),
    emp_sfx: new FormControl(''),
    emp_name: new FormControl(''),
    __v: new FormControl(null)
  });

  // For creating new entry
  initialize() {
    this.EmployeeForm.setValue({
      _id: null,
      emp_id: null,
      emp_lname: null,
      emp_fname: null,
      emp_mname: null,
      emp_hdate: new Date,
      emp_jtitle: null,
      emp_dept: null,
      emp_stat: null,
      emp_fprint: null,
      emp_skype: null,
      emp_domlog: null,
      emp_badge: null,
      emp_sfx: null,
      emp_name: null,
      __v: null
    });
  }

  // For editing
  populate(emp_row) {
    this.EmployeeForm.setValue(emp_row);

    if (emp_row.emp_hdate){
      this.EmployeeForm.get('emp_hdate').setValue(new Date(this.EmployeeForm.get('emp_hdate').value.toString().slice(0, -1)));
    }
  }

  /* CRUD Activities */
  // CREATE
  addNewEmployeeRecord(emps) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('/emps/add/new', emps, {headers: headers});
  }

  // READ
  getAllEmployeeRecords() {
    return this.http.get('/emps/rd/all');
  }

  // UPDATE
  editEmployeeRecord(emps) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.put('/emps/upd/'+emps._id, emps, {headers: headers});
  }
  
  // DELETE
  deleteEmployeeRecord(id) {
    return this.http.delete('/emps/del/'+id);
  }
}
