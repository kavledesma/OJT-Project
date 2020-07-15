import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from "../../services/authenticate.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticate: AuthenticateService,
    private alert: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authenticate.logout();
    this.alert.show("You are logged out.", {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/']);
    return false;
  }

}
