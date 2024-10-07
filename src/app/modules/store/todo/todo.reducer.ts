import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';

export const TODO_FEATURE_KEY = 'todo-store';

export enum TodoStatus {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
}

export interface Todo {
  id: number;
  name?: string;
  status: TodoStatus;
}

export interface TodoState {
  todoList: Todo[];
}

export const initialState: TodoState = {
  todoList: [],
};

const todoReducer = createReducer(
  initialState,
  on(actions.getTodosSuccess, (state, { todoList }) => ({
    ...state,
    todoList,
  })),
  on(actions.addTodo, (state, { name, status }) => ({
    ...state,
    todoList: [
      ...state.todoList,
      { id: generateId(), name, status }, 
    ],
  })),
  on(actions.changeTodoName, (state, { id, name }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === id ? { ...el, name } : el
    ),
  })),
  on(actions.changeTodoStatus, (state, { id, status }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === id ? { ...el, status } : el
    ),
  })),
  on(actions.removeTodo, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((el) => el.id !== id),
  }))
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}


function generateId(): number {
  return Math.floor(Math.random() * 10000); 
}
