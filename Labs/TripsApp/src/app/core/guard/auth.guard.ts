import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {AuthenticationService} from '../auth.service';
import {RoleAccessService} from '../role-access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public roleAccess: RoleAccessService
  ) {
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.authenticated !== true) {
      this.router.navigate(['logIn']);
    }
    if (next.routeConfig.path == 'add' && !this.roleAccess.userAccessModel.add_trip) {
      return false;
    }
    return true;
  }
}
