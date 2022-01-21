import { Injectable } from '@angular/core';
import {  CanActivate,CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginGuard implements CanActivate,CanLoad {
  constructor(private userService:UserService,private router:Router){}
  canActivate(
): Observable<boolean > | boolean {
  return this.userService.validatedToken().pipe(
    tap( valid => {
      console.log('Guards Validated token',valid)
      if ( !valid ) {
        this.router.navigateByUrl('/auth');
      }
    })
  );
  }
  canLoad():Observable<boolean>|boolean {
    return this.userService.validatedToken().pipe(
      tap( valid => {
        if ( !valid ) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
  
}
