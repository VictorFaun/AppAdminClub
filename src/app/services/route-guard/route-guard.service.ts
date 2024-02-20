import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private _storage_: Storage,
    private _router_: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this._storage_.get('user').then((rslt) => {
        if (rslt && 'token' in rslt && rslt.token) {
          resolve(true);
        } else {
          this._router_.navigate(["/login"]);
          resolve(false);
        }
      }).catch((err)=>{
        this._router_.navigate(["/login"]);
        resolve(false);
      })
    });
  }

  logout(){
    this._storage_.remove("user")
    this._router_.navigate(["/login"]);
  }

}
