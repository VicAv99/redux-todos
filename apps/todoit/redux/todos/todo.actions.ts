import { Todo } from '@dopnization/shared/api-interfaces';

export enum TodoActions {
  GET_TODOS = 'GET_TODOS',
  GET_TODOS_FAILED = 'GET_TODOS_FAILED',
  CREATE_TODO = 'CREATE_TODO',
  CREATE_TODO_FAILED = 'CREATE_TODO_FAILED',
  UPDATE_TODO = 'UPDATE_TODO',
  UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_FAILED = 'DELETE_TODO_FAILED',
  TODOS_LOADING = 'TODOS_LOADING',
}

export const getAllTodos = () => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const res = await fetch('http://localhost:3333/api/todos').then(res => res.json());
    dispatch({
      type: TodoActions.GET_TODOS,
      payload: res,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createTodo = (todo: Todo) => async (dispatch) => {
  dispatch(loadingAction());
  console.log(todo)
  try {
    const res = await fetch(`http://localhost:3333/api/todos`, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json());
    dispatch({
      type: TodoActions.CREATE_TODO,
      payload: res,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = (id: number) => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const res = await fetch(`http://localhost:3333/api/todos/${id}`, { method: 'DELETE'}).then(res => res.json());
    dispatch({
      type: TodoActions.DELETE_TODO,
      payload: res,
    });
  } catch (e) {
    console.log(e);
  }
};

const loadingAction = () => ({
  type: TodoActions.TODOS_LOADING,
});
