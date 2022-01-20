import * as React from 'react';
import { FC } from 'react';
import userTypedSelector from '../../hooks/userTypedSelector';
import Todo from './Todo/Todo';
import { ITodos } from '../Todos/interfaces/ITodos';
import { ITodoItem } from './Todo/interfaces/ITodo';

const Todos: FC = () => {
  const {todos}: ITodos = userTypedSelector((state) => state.todoReducer);
  const mapedTodos = todos.map((item: ITodoItem, index: number) => <Todo key={item.title + index} id={item.id} title={item.title} status={item.status}></Todo>)
  return (
    <section>
      {mapedTodos}
    </section>
  )
};
export default Todos;