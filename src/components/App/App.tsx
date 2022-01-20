import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redusers/mainReducer';
import TodoInput from '../Todos/TodoCreationForm/TodoCreationForm';
import Todos from '../Todos/Todos';
function App() {
  return (
    <Provider store={store}>
      <TodoInput></TodoInput>
      <Todos></Todos>
       </Provider>
 );
} 

export default App;