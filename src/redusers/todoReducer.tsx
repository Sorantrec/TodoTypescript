import {ITodos} from '../components/Todos/interfaces/ITodos';
import {IAddTodoItemType, IChangeStatusTodoItemType, IRemoveTodoItemType, IEditTodoItemType} from './interfaces/Interfaces';
import { ActionTypes } from './types/ActionTypes';

const {ADD_TODO_ITEM, CHANGE_STATUS_TODO_ITEM, SAVE_TODO_ITEM, REMOVE_TODO_ITEM} = ActionTypes;

type ActionType = IAddTodoItemType | IChangeStatusTodoItemType | IEditTodoItemType | IRemoveTodoItemType;

const initialState: ITodos = {
  todos: [{
   title: "test",
   status: false,
   id: 1
  }]
}

const todoReducer = (state = initialState, action: ActionType) => {
  const {todos} = state;
  switch (action.type) {
    case ADD_TODO_ITEM:
      return state = {todos: [...todos, action.payload]}
    case CHANGE_STATUS_TODO_ITEM:
      return state = {todos: todos.map((todo) => todo.id === action.payload.id ? {...todo, status: action.payload.status}: todo)};
    case SAVE_TODO_ITEM:
      return state = {todos: todos.map((todo) => todo.id === action.payload.id ? {...todo, title: action.payload.title}: todo)};
    case REMOVE_TODO_ITEM:
      return state = {todos: todos.filter((todo) => todo.id !== action.payload)}
    default:
      return state;
  }
}

export default todoReducer;