import * as React from 'react';
import { INewTaskInput } from '../NewTaskInput/interfaces/INewTaskInput';

const NewTaskInput = ({inputRef, inputValue, type, name, id, setInputValue = () => {}, onKeydownFunc = () => {}}: INewTaskInput) => {
  return (
    <input ref={inputRef} value={inputValue} type={type} name={name} id={id} onChange={(event) => setInputValue(event.target.value)} onKeyDown={(event) => onKeydownFunc(event.key)} />
  )
};

export default NewTaskInput;