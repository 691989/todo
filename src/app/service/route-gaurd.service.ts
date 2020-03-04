import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {
  //canActivate is an Interface that
  // a class can implement to be a guard deciding if a route can be activated.

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,private router:Router) {

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserloggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
     // return false;
    }

  }


}
