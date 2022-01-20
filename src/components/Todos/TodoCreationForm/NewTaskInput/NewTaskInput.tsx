import * as React from 'react';
import { INewTaskInput } from '../NewTaskInput/interfaces/INewTaskInput';

export default function TaskInput({inputValue, type, name, id, setInputValue = () => {}, onKeydownFunc = () => {}}: INewTaskInput) {
  return (
    <input value={inputValue} type={type} name={name} id={id} onChange={(event) => setInputValue(event.target.value)} onKeyDown={(event) => onKeydownFunc(event.key)} />
  )
};