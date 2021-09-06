import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  inputTodo: string = '';
  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos;
  }

  singOut() {
    this.todosService.singOut();
  }

  doneTodo(event: Event) {
    if ((event.target as Element).id) {
      const id = (event.target as Element).id;
      this.todos.forEach((todo) => {
        if (todo.id === +id) {
          todo.completed = !todo.completed;
        }
      });
      this.todosService.setTodos = this.todos;
    }
  }

  // getAll() {
  //   this.todosService.getAll().subscribe((todos: Todo[]) => {
  //     this.todosService.setTodos = todos;
  //     this.todos = this.todosService.getTodos;
  //   });
  // }

  addTodo() {
    this.todosService.create({
      userId: 1,
      title: this.inputTodo,
      completed: false,
    }).subscribe((todo: Todo) => {
      this.todosService.setTodo = todo;
    });
    this.inputTodo = '';
  }
}
