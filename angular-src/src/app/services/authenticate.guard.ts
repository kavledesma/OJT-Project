import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor (
    private authenticate: AuthenticateService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authenticate.notLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}

