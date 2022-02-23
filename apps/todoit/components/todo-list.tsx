import { Todo } from '@dopnization/shared/api-interfaces';
import { Button, Card, CardContent, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';

interface TodoListProps {
  todos: Todo[];
  onTodoClick?: (id: number) => void;
  onTodoDeleteClick?: (id: number) => void;
  onTodoCompletedClick?: (id: number) => void;
}

export const TodoList = ({ todos = [], ...props }: TodoListProps) => {
  const handleTodoClicked = (id: number) => () => props.onTodoClick?.(id);
  const handleTodoDeleteClicked = (id: number) => () => props.onTodoDeleteClick?.(id);
  const handleTodoCompleteClicked = (id: number) => () => props.onTodoCompletedClick?.(id);

  return (
    <Card>
      <CardContent>
        <List subheader={
          <ListSubheader component="div">
            All Todos
          </ListSubheader>
        }>
          {!todos.length && <ListItem><ListItemText>Add a todo</ListItemText></ListItem>}
          {!!todos.length && todos.map(todo => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                  <Button
                    type="button"
                    onClick={handleTodoCompleteClicked(todo.id)}
                  >
                    {todo.completed ? 'Uncomplete' : 'Complete'}
                  </Button>
                  <Button
                    type="button"
                    color="error"
                    onClick={handleTodoDeleteClicked(todo.id)}
                  >
                    X
                  </Button>
                </>
              }
            >
              <ListItemButton onClick={handleTodoClicked(todo.id)}>
                <ListItemText primary={todo.title} secondary={todo.description} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
