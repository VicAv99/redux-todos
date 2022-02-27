import { TodoActions } from './todo.actions';

const initialState = {
  todos: [],
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoActions.TODOS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TodoActions.GET_TODOS:
    case TodoActions.CREATE_TODO:
    case TodoActions.UPDATE_TODO:
    case TodoActions.DELETE_TODO:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default todoReducer;
