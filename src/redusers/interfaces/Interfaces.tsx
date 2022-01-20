import { ActionTypes } from "../types/ActionTypes";
import { ITodoItem } from '../../components/Todos/Todo/interfaces/ITodo';

export interface IAddTodoItemType {
  type: ActionTypes.ADD_TODO_ITEM,
  payload: ITodoItem
}

export interface IChangeStatusTodoItemType {
  type: ActionTypes.CHANGE_STATUS_TODO_ITEM,
  payload: ITodoItem
}

export interface IRemoveTodoItemType {
  type: ActionTypes.REMOVE_TODO_ITEM,
  payload: number
}

export interface IEditTodoItemType {
  type: ActionTypes.SAVE_TODO_ITEM,
  payload: ITodoItem
}