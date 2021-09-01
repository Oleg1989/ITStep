import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodosService } from './todos.service';

@Injectable({
  providedIn: 'root'
})
export class AboutGuard implements CanActivate {
  constructor(private todosService: TodosService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.todosService.isLogedUser;
  }

}
