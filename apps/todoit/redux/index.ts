import { combineReducers } from 'redux';
import todoitReducer from './todos/todo.reducer';

export const rootReducer = combineReducers({
  todoit: todoitReducer,
});
