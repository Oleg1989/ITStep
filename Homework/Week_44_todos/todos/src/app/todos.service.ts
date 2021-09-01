import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  isLogedUser: boolean = false;
  constructor(private http: HttpClient) { }

  singIn(name: string | null) {
    if (name != null) {
      this.isLogedUser = true;
    }
  }
  singOut() {
    this.isLogedUser = false;
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: 5,
      }
    })
  }
}
