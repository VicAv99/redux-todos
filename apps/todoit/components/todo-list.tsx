import { Todo } from '@dopnization/shared/api-interfaces';
import { Card, CardContent, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';

interface TodoListProps {
  todos: Todo[];
  onTodoClick?: (id: number) => void;
  onTodoDeleteClick?: (id: number) => void;
  onTodoCompletedClick?: (id: number) => void;
}

export const TodoList = ({ todos = [], ...props }: TodoListProps) => {
  const handleTodoClicked = (id: number) => () => props.onTodoClick?.(id);
  const handleTodoDeleteClicked = (id: number) => () => props.onTodoClick?.(id);
  const handleTodoCompleteClicked = (id: number) => () => props.onTodoClick?.(id);

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
                  <button
                    type="button"
                    onClick={handleTodoCompleteClicked(todo.id)}
                  >
                    {todo.completed ? 'Uncomplete' : 'Complete'}
                  </button>
                  <button
                    type="button"
                    onClick={handleTodoDeleteClicked(todo.id)}
                  >
                    Delete
                  </button>
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
