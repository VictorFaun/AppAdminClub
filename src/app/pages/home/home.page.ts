import { Component } from '@angular/core';
import { RouteGuardService } from 'src/app/services/route-guard/route-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _routeGuard_: RouteGuardService) { }

  logout() {
    this._routeGuard_.logout()
  }
}
