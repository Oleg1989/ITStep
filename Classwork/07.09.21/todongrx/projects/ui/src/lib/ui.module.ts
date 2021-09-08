import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';



@NgModule({
  declarations: [
    UiComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoInputComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent,
    ToDoListComponent
  ]
})
export class UiModule { }
