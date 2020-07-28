import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean{
   let un= localStorage.getItem("username");
   if(un==undefined){
     alert("unau access");
     return false
   }
   else
    return true;
  }
  
}
