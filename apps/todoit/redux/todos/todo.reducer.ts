import { DELETE_TODO, LOADING, GET_ALL_TODOS } from "./todo.actions";

const initialState = {
  todos: [],
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TODOS:
    case DELETE_TODO:
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
