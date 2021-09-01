import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string | null = null;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.todosService.singIn(this.name);
  }
}
