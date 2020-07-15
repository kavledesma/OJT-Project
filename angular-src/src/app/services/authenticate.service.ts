import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  users: any;
  token: any;

  constructor ( 
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) { }

  // STORES THE USER INFORMATION TO THE LOCAL STORAGE OF THE BROWSER (FOUND IN DEVTOOLS-APPLICATION)
  storeUserDataToLocalStorage(token, users) {
    localStorage.setItem('key_id', token);
    localStorage.setItem('account', JSON.stringify(users));
    this.users = users;
    this.token = token;
  }

  // LOGOUT
  logout() {
    this.token = null
    this.users = null;
    localStorage.clear();
  }

  // WHEN NOT LOGGED IN, ACCOUNT EXPIRED WITHIN ASSIGNED PERIOD
  notLoggedIn() {
    return this.jwtHelper.isTokenExpired(localStorage.getItem('key_id'));
  }
  
  // CHECKS USER ACCOUNT IF 'USERNAME' AND 'PASSWORD' EXISTS AND MATCHED
  authenticateUser(users) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/users/auth', users, {headers: headers});
  }
}
