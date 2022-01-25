import React, { useRef, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../../redusers/mainReducer';
import TodoCreationForm from '../Todos/TodoCreationForm/TodoCreationForm';
import Todos from '../Todos/Todos';
import Button from '../UI/Button/Button';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
function App() {
  const [activeWindow, setActiveWindow] = useState(false);
  const changeActiveWindow = () => setActiveWindow((oldState) => !oldState);
  const [filter, setFilter] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if(activeWindow) inputRef.current?.focus();
  }, [activeWindow]);
  
  return (
    <Provider store={store}>
      <Button text='Create post' onClickFunc={changeActiveWindow}></Button>
      <ModalWindow visible={activeWindow} changeActiveWindow={changeActiveWindow}>
        <TodoCreationForm inputRef={inputRef} setActiveWindow={setActiveWindow} setFilter={setFilter}></TodoCreationForm>
      </ModalWindow>
      <Todos filter={filter} setFilter={setFilter}></Todos>
    </Provider>
 );
} 

export default App;