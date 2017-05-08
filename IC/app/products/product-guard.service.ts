import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router'; //ActivatedRouteSnapshot checks the id passed in URL is valid


@Injectable()

export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot ): boolean {    

        let id = +route.url[1].path;

        if (isNaN(id) || id < 1) {

            alert("Not valid Id");
            this._router.navigate(["/products"]);
            return false;
        }

        return true;
    }
}