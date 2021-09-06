import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  todo!: Todo;
  id!: Number;
  constructor(private todosService: TodosService, private route: ActivatedRoute) {
    this.get(this.id);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params.id;
      this.get(this.id);
    });
  }

  singOut() {
    this.todosService.singOut();
  }

  get(id: Number) {
    // this.todosService.get(id).subscribe((todo) => {
    //   this.todo = todo;
    // });
    this.todosService.getTodos.forEach((todo) => {
      if (todo.id == id) {
        this.todo = todo;
      }
    });
  }

  delete() {
    this.todosService.setTodos = this.todosService.getTodos.filter((todo) => todo.id !== this.id);
    this.todosService.delete(this.id).subscribe(() => {
      // this.todosService.setTodos = this.todosService.getTodos.filter((todo) => todo.id !== this.id);
      console.log('Delete');
    });
  }
  update() {
    this.todosService.update(this.todo).subscribe((todo) => {
      this.todo = todo;
    });
    this.todosService.getTodos.forEach((todo) => {
      if (this.todo.id == todo.id) {
        todo = { ...this.todo };
      }
    });
  }

}
