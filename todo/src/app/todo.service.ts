import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor() { }

  todos: Todo[] = [{
  	_id : 1 ,
  	title : "haha",
  	complete : false
  },{
  	_id : 2 ,
  	title : "hoho",
  	complete : false
  },{
  	_id : 3 ,
  	title : "hihi",
  	complete : true
  },];

  getAllTodo(): Todo[]{
  	return this.todos;
  }

  addTodo(todo){
  	return this.todos.push(todo);
  }

  removeTodo(todo){
  	return this.todos.splice(this.todos.indexOf(todo), 1)
  }

  toggleComplete(todo){
  	return this.todos[this.todos.indexOf(todo)].complete = !this.todos[this.todos.indexOf(todo)].complete;
  }

}
