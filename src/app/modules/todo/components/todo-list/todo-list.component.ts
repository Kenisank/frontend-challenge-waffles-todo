import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { Todo } from 'src/app/modules/store/todo/todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css','../../todo.component.css']
})
export class TodoListComponent {


  @Input() todos: Todo[] | null = [];;
  @Output() statusChange = new EventEmitter<Todo>();
  @Output() edit = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();


  onStatusChange(todo: Todo) {
    this.statusChange.emit(todo);
  }

  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }



}
