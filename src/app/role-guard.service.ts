import { Injectable } from '@angular/core';
import { AngularTokenService} from 'angular-token';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate{

  constructor(public authService:AngularTokenService, public router: Router) {

   }
   canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    
    if (
      !this.authService.userSignedIn() || 
      this.authService.currentUserType !== expectedRole
    ) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
