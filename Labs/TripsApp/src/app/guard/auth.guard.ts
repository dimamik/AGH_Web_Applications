import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from
    '@angular/router';

import { Observable } from 'rxjs';
import {AuthenticationService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(     public authService: AuthenticationService,     public router: Router )
  { }



  canActivate(   next: ActivatedRouteSnapshot,   state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.authState$ !== true) {
      this.router.navigate(['register'])
    }
    return true;
  }
}
