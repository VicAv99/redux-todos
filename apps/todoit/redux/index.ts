import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import todoitReducer from './todos/todo.reducer';

export const combinedReducer = combineReducers({
  todoit: todoitReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
}

