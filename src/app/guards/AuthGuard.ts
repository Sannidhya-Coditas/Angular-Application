import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/AuthService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url === '/login') {
      //return this.authService.isLoggedIn() === false;
      if (this.authService.isLoggedIn()) {
        return this.router.parseUrl('/home');
      } else {
        return true;
      }
    } else if (state.url === '/home') {
      return this.authService.isLoggedIn() === true;
    }
    return false;
  }
}
