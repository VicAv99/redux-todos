import { Todo } from '@dopnization/shared/api-interfaces';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { TodoCard, TodoList } from '../../components';
import { wrapper } from '../../redux/store';
import { createTodo, deleteTodo, getAllTodos } from '../../redux/todos';

export const getServerSideProps = wrapper.getServerSideProps(store => async (): Promise<any> => {
  await store.dispatch(getAllTodos());
});

export function Index() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todoit.todos);

  const handleTodoDeleteClicked = (id: number) => dispatch(deleteTodo(id));
  const handleTodoSubmitClicked = (todo: Todo) => {
    dispatch(createTodo(todo))
  };

  return (
    <Container>
      <Grid container spacing={2} my={5}>
        <Grid item xs={7}>
          <TodoList todos={todos} onTodoDeleteClick={handleTodoDeleteClicked} />
        </Grid>
        <Grid item xs={5}>
          <TodoCard onTodoSubmitClick={handleTodoSubmitClicked} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
