import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {submitTodoItem} from '../../../actions/todoActions';
import NewTaskInput from './NewTaskInput/NewTaskInput';
import { ITodos } from '../interfaces/ITodos';
import userTypedSelector from '../../../hooks/userTypedSelector';
import Button from '../../Button/Button';

export default function TodoCreationForm() {
  const {todos}: ITodos = userTypedSelector((state) => state.todoReducer);
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const submitTask = () => {
    if(inputValue && !(todos.find((todo) => todo.title === inputValue))) {
      dispatch(submitTodoItem({id: new Date().getMilliseconds(), status: false, title: inputValue}));
    }
  }
  const checkKeyDown = (key: string) => {
    if(key === 'Enter' && inputValue) submitTask();
  }
  return (
    <label>
      <span>Task:</span>
      <NewTaskInput id='text-input' inputValue={inputValue} type='text' name='task-text-input' setInputValue={setInputValue} onKeydownFunc={checkKeyDown}></NewTaskInput>
      <Button onClickFunc={submitTask} text={'Submit'}></Button>
    </label>
  )
};
