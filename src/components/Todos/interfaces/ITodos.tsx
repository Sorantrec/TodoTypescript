import { ITodoItem } from "../Todo/interfaces/ITodo";

export interface ITodos {
  todos: ITodoItem[]
}

export interface IProps {
  filter: string,
  setFilter: (value: string) => void
}