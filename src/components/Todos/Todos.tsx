import * as React from 'react';
import { useState, useMemo } from 'react';
import userTypedSelector from '../../hooks/userTypedSelector';
import Todo from './Todo/Todo';
import { ITodos, IProps } from '../Todos/interfaces/ITodos';
import { ITodoItem } from './Todo/interfaces/ITodo';
import Filters from './Filters/Filters';

const Todos = ({filter, setFilter}: IProps) => {
  const {todos}: ITodos = userTypedSelector((state) => state.todoReducer);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const mapedTodos = filteredTodos.map((item: ITodoItem, index: number) => <Todo key={item.title + index} id={item.id} title={item.title} status={item.status}></Todo>)
  const filterTodos = () => {
    const completedTodos = filteredTodos.filter((item) => item.status === true);
    const notCompletedTodos = filteredTodos.filter((item) => item.status === false);
    if(filter === 'completed') setFilteredTodos(() => [...completedTodos, ...notCompletedTodos]);
    else if(filter === 'notCompleted') setFilteredTodos(() => [...notCompletedTodos, ...completedTodos]);
  }
  useMemo(() => setFilteredTodos(todos), [todos]);
  useMemo(() => filterTodos(), [filter]);
  
  return (
    <section>
      <Filters filter={filter} setFilter={setFilter}></Filters>
      {mapedTodos}
    </section>
  )
};
export default Todos;