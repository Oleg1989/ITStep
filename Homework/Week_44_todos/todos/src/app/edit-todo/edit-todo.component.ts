import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  singOut() {
    this.todosService.singOut();
  }

}
