const initialState = {
  todos: [],
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ALL_TODOS':
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
