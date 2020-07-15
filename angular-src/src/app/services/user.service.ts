import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor( private http: HttpClient ) { }

  UserForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    user_lname: new FormControl('', Validators.required),
    user_fname: new FormControl('', Validators.required),
    user_mname: new FormControl(''),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    __v: new FormControl(null)
  });

  LoginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  // FILLING IN THE TEXTBOXES WITH BLANK DATA
  initialize() {
    this.UserForm.setValue({
      _id: null,
      user_lname: '',
      user_fname: '',
      user_mname: '',
      username: '',
      password: '',
      __v: null
    });
  }

  // FILLING OUT EACH TEXTBOX WITH DATA 
  populate(user_row) {
    this.UserForm.setValue(user_row);
  }

  /* CRUD Activities */
  // CREATE
  registerUser(users) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/users/add/new', users, {headers: headers});
  }

  // READ
  getAllUserAccounts() {
    return this.http.get('/users/rd/all');
  }

  // UPDATE
  editUserAccount(users) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.put('/users/upd/'+users._id, users, {headers: headers});
  }

  // DELETE
  deleteUserAccount(id) {
    return this.http.delete('/users/del/'+id);
  }
}
