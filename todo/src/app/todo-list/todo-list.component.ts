import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService : TodoService) { }

   newTodo: Todo = new Todo();


  // todos: Todo[] = [{
  // 	_id : 1 ,
  // 	title : "haha",
  // 	complete : false
  // },{
  // 	_id : 2 ,
  // 	title : "hoho",
  // 	complete : false
  // },{
  // 	_id : 3 ,
  // 	title : "hihi",
  // 	complete : true
  // },];


  ngOnInit() {
  }

  addTodo(){
  	this.todoService.addTodo(this.newTodo);
  	this.newTodo = new Todo();
  }

  removeTodo(todo){
  	// this.todos.splice(this.todos.indexOf(todo), 1)
  	this.todoService.removeTodo(todo);
  }

  toggleComplete(todo){
  	// this.todos[this.todos.indexOf(todo)].complete = !this.todos[this.todos.indexOf(todo)].complete;
  	this.todoService.toggleComplete(todo);
  }

  get todos() {
    return this.todoService.getAllTodo();
  }
}
