export const GET_ALL_TODOS = 'GET_ALL_TODOS';

export const getAllTodos = () => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const res = await fetch('http://localhost:3333/api/todos').then(res => res.json());
    dispatch({
      type: GET_ALL_TODOS,
      payload: res,
    });
  } catch (e) {
    console.log(e);
  }
};

const loadingAction = () => ({
  type: 'LOADING',
});
