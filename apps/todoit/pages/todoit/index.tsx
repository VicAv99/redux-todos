import { Container, Grid } from "@mui/material";
import { wrapper } from "../../redux/store";
import { TodoCard, TodoList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../../redux/todos";

export const getServerSideProps = wrapper.getServerSideProps(store => async (): Promise<any> => {
  await store.dispatch(getAllTodos());
});

export function Index() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todoit.todos);

  const handleTodoDeleteClicked = (id: number) => dispatch(deleteTodo(id));

  return (
    <Container>
      <Grid container spacing={2} my={5}>
        <Grid item xs={7}>
          <TodoList todos={todos} onTodoDeleteClick={handleTodoDeleteClicked} />
        </Grid>
        <Grid item xs={5}>
          <TodoCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
