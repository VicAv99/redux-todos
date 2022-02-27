import { Todo } from '@dopnization/shared/api-interfaces';
import CancelIcon from '@mui/icons-material/Cancel';
import CompleteIcon from '@mui/icons-material/DoneAllOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import { Card, CardContent, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';

import { GenerateElements } from './generate-elements';

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

  const renderNoItems = () => <ListItem><ListItemText>No todos</ListItemText></ListItem>;

  return (
    <Card>
      <CardContent>
        <List subheader={
          <ListSubheader component="div">
            All Todos
          </ListSubheader>
        }>
          <GenerateElements items={todos}
            emptyItemsRender={renderNoItems()}
            render={(todo) => (
              <ListItem
                key={todo.id}
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      type="button"
                      onClick={handleTodoCompleteClicked(todo.id)}
                    >
                      {todo.completed ? <UndoIcon /> : <CompleteIcon />}
                    </IconButton>
                    <IconButton
                      edge="end"
                      type="button"
                      color="error"
                      onClick={handleTodoDeleteClicked(todo.id)}
                    >
                      <CancelIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemButton onClick={handleTodoClicked(todo.id)}>
                  <ListItemText primary={todo.title} secondary={todo.description} />
                </ListItemButton>
              </ListItem>
            )} />
        </List>
      </CardContent>
    </Card>
  )
}
