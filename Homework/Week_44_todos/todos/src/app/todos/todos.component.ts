import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  singOut() {
    this.todosService.singOut();
  }

}
