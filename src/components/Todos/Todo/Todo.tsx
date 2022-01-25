import * as React from 'react';
import { useState, useRef } from 'react';
import { ITodoItem } from './interfaces/ITodo';
import { changeStatusTodoItem, removeTodoItem, saveTodoItemTxt } from '../../../actions/todoActions';
import { useDispatch } from 'react-redux';
import NewTaskInput from '../TodoCreationForm/NewTaskInput/NewTaskInput';
import Button from '../../UI/Button/Button';

const Todo = ({id, title, status}: ITodoItem) => {
  const [inputEditStatus, setInputEditStatus] = useState<boolean>(false);
  const [inputValue, setInputTxt] = useState<string>(title);
  const dispatch = useDispatch();
  const changeItemStatus = () => {
    const todoItem = {id, title, status: !status};
    dispatch(changeStatusTodoItem(todoItem));
  }
  const editItemStatus = () => setInputEditStatus((oldState) => !oldState);
  const changeItemTxt = (inputValue: string) => setInputTxt(inputValue);
  const saveItemTxt = () => {
    dispatch(saveTodoItemTxt({id: id, title: inputValue}));
    editItemStatus();
  }
  const checkKeyDown = (key: string) => {
    if(key === 'Enter' && inputValue) saveItemTxt();
  }
  const removeItem = () => dispatch(removeTodoItem(id));
  const idAttr = String(id);
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <div id={idAttr}>
      { inputEditStatus ? 
        <NewTaskInput inputRef={inputRef} type='text' name={`input-edit-${id}`} inputValue={inputValue} setInputValue={changeItemTxt} onKeydownFunc={checkKeyDown} />
        : 
        <p onClick={() => changeItemStatus()}>{title}</p> }
      <p style={{color: status ? 'green': '#000'}}>{status ? 'Completed': 'Not completed'}</p>
      <div>
        {inputEditStatus ? 
        <Button text='Save' onClickFunc={saveItemTxt}></Button>
        : 
        <Button text='Edit' onClickFunc={editItemStatus}></Button>
        }
        <Button text='Remove' onClickFunc={removeItem}></Button>
      </div>
    </div>
  )
};

export default Todo;