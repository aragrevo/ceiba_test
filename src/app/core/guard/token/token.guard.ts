import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const accessToken = this.getToken();

    if (state.url.includes('login')) {
      if (!accessToken) return true;
      this.router.navigate(['users'])
      return false;
    }

    if (!!accessToken) return true;
    this.router.navigate(['login'])
    return false;
  }

  private getToken(): string {
    return localStorage.getItem('token');
  }


}
