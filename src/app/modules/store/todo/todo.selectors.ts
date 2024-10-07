import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState, TODO_FEATURE_KEY, TodoStatus } from './todo.reducer';

export const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

export const getAllTodos = createSelector(getTodoState, (state) => state.todoList);

export const getCompletedTodos = createSelector(getAllTodos, (todos) =>
  todos.filter((todo) => todo.status === TodoStatus.Complete)
);

export const getInProgressTodos = createSelector(getAllTodos, (todos) =>
  todos.filter((todo) => todo.status === TodoStatus.InProgress)
);
