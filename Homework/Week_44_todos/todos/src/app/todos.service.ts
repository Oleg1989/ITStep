import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  isLogedUser: boolean = false;
  constructor(private http: HttpClient) {
  }

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

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',
      todo
    );
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
  }

  delete(id: Number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
