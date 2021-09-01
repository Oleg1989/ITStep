import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGuard } from './about.guard';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'todos-list',
    component: TodosComponent,
    canActivate: [AboutGuard],
  },
  {
    path: 'edit-todo',
    component: EditTodoComponent,
    canActivate: [AboutGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
