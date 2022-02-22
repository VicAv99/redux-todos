const initialState = {initial: 'hello'};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          completed: false,
        },
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: !state[action.id].completed,
        },
      };
    default:
      return state;
  }
}

export default todoReducer;
