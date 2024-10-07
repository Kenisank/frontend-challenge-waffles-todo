import { createAction, props } from '@ngrx/store';
import { createFailureAction, createSuccessAction } from '../action-utils';
import { Todo, TodoStatus } from './todo.reducer';

export const getTodos = createAction('[ToDo] Get ToDo List');
export const getTodosSuccess = createSuccessAction(
  getTodos,
  props<{ todoList: Todo[] }>()
);
export const getTodosFailure = createFailureAction(getTodos);

export const addTodo = createAction(
  '[ToDo] Add ToDo Item',
  props<{ name: string; status: TodoStatus }>() 
);

export const changeTodoName = createAction(
  '[ToDo] Change ToDo Name',
  props<{ id: number; name: string }>() 
);

export const changeTodoStatus = createAction(
  '[ToDo] Change ToDo Status',
  props<{ id: number; status: TodoStatus }>() 
);

export const removeTodo = createAction(
  '[ToDo] Remove ToDo Item',
  props<{ id: number }>() 
);
