import { ITodoItem } from "../components/Todos/Todo/interfaces/ITodo";
import { ActionTypes } from "../redusers/types/ActionTypes";
export const submitTodoItem = (todoItem: ITodoItem) => {
  return {
    type: ActionTypes.ADD_TODO_ITEM,
    payload: todoItem
  }
};
export const changeStatusTodoItem = (todoItem: ITodoItem) => {
  return {
    type: ActionTypes.CHANGE_STATUS_TODO_ITEM,
    payload: todoItem
  }
}

export const saveTodoItemTxt = (editedTodoTxt: {id: number, title: string}) => {
  return {
    type: ActionTypes.SAVE_TODO_ITEM,
    payload: editedTodoTxt
  }
}

export const removeTodoItem = (id: number) => {
  return {
    type: ActionTypes.REMOVE_TODO_ITEM,
    payload: id
  }
}