import { Container, Grid } from "@mui/material";
import { wrapper } from "../../redux/store";
import { TodoCard, TodoList } from "../../components";
import { useSelector } from "react-redux";
import { getAllTodos } from "../../redux/todos";

export const getServerSideProps = wrapper.getServerSideProps(store => async (): Promise<any> => {
  await store.dispatch(getAllTodos());
});

export function Index() {
  const todos = useSelector((state: any) => state.todoit.todos);
  return (
    <Container>
      <Grid container spacing={2} my={5}>
        <Grid item xs={7}>
          <TodoList todos={todos} />
        </Grid>
        <Grid item xs={5}>
          <TodoCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
