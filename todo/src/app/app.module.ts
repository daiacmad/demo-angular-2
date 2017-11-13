import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ConvertNumberDirective } from './convert-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ConvertNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
