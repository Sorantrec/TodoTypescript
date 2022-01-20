import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoReducer';

const redusers = combineReducers({
  todoReducer
})

const rootReducer = configureStore({reducer: redusers});
export type RootState = ReturnType<typeof redusers>;

export default rootReducer;