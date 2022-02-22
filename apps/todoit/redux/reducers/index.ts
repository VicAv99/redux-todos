import { combineReducers } from 'redux';
import todoitReducer from './todo.reducer';

export const rootReducer = combineReducers({
  todoit: todoitReducer,
});
