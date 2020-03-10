import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private homeService:HomeService,private router: Router) { }

  canActivate(): boolean {
    if (!this.homeService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
