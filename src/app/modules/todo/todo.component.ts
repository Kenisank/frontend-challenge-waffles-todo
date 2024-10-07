// import { Component, OnInit } from '@angular/core';
// import { filter, Observable, take } from 'rxjs';
// import { getTodos, addTodo, removeTodo, changeTodoStatus, changeTodoName } from '../store/todo/todo.actions';
// import { select, Store } from '@ngrx/store';
// import { getAllTodos } from '../store/todo/todo.selectors';
// import { TodoStatus, Todo } from '../store/todo/todo.reducer';
// import { FormControl, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { EditTodoDialogComponent } from './components/edit-todo-dialog/edit-todo-dialog.component';
// import { map } from 'rxjs/operators';



// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   statusEnum = TodoStatus;

//   newTodo = new FormControl('', [Validators.required]);

//   allTodos$: Observable<Todo[]> = this.store.pipe(select(getAllTodos));

 
// inProgressTodos$ = this.allTodos$.pipe(map(todos => todos.filter(todo => todo.status === TodoStatus.InProgress)));
// completedTodos$ = this.allTodos$.pipe(map(todos => todos.filter(todo => todo.status === TodoStatus.Complete)));


//   constructor(
//     private store: Store,
//     public dialog: MatDialog
//   ) { }

//   ngOnInit(): void {
//     this.store.dispatch(getTodos());
//   }
  
//   addNewTodo() {
//     if (!this.newTodo.value) return;
//     this.store.dispatch(addTodo({ name: this.newTodo.value, status: TodoStatus.InProgress }));
//   }

//   changeTodoName(todo: Todo) {
//     this.store.dispatch(changeTodoName({ id: todo.id, name: todo.name || '' }));
//   }

//   changeTodoStatus(todo: Todo) {
//     const newStatus = todo.status === TodoStatus.Complete ? TodoStatus.InProgress : TodoStatus.Complete;
//     this.store.dispatch(changeTodoStatus({ id: todo.id, status: newStatus }));
//   }



//   removeTodo(todo: Todo) {
//     this.store.dispatch(removeTodo({ id: todo.id }));
// }
// }


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getTodos, addTodo, removeTodo, changeTodoStatus } from '../store/todo/todo.actions';
import { getAllTodos } from '../store/todo/todo.selectors';
import { TodoStatus, Todo } from '../store/todo/todo.reducer';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  statusEnum = TodoStatus;
  newTodo = new FormControl('', [Validators.required]);

  allTodos$: Observable<Todo[]> = this.store.pipe(select(getAllTodos));
  inProgressTodos$ = this.allTodos$.pipe(map(todos => todos.filter(todo => todo.status === TodoStatus.InProgress)));
  completedTodos$ = this.allTodos$.pipe(map(todos => todos.filter(todo => todo.status === TodoStatus.Complete)));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getTodos());
  }

  addNewTodo() {
    if (!this.newTodo.value) return;
    this.store.dispatch(addTodo({ name: this.newTodo.value, status: TodoStatus.InProgress }));
  }

  changeTodoStatus(todo: Todo) {
    const newStatus = todo.status === TodoStatus.Complete ? TodoStatus.InProgress : TodoStatus.Complete;
    this.store.dispatch(changeTodoStatus({ id: todo.id, status: newStatus }));
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }

  
}
