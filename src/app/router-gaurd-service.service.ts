import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {HelperService} from "./helper.service";

@Injectable()
export class RouterGaurdServiceService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
    | Promise<boolean>
    | boolean {
    return false;

  }
  constructor(private helperService: HelperService, private router: Router) {
  }

}
