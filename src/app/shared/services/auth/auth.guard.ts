import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTING } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentToken = this.authService.currentTokenValue;
    if (currentToken) {
      return true;
    } else {
      // Not logged in, so redirect to login page with the return url
      this.router.navigate([ROUTING.LOGIN], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}
