import { Todo } from '@dopnization/shared/api-interfaces';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { TodoField } from '.';

interface TodoCardProps {
  selectedTodo?: Todo;
  onTodoSubmitClick: (todo: Todo) => void;
  onTodoCanceledClick?: () => void;
}

export const TodoCard = (props: TodoCardProps) => {
  const { control, handleSubmit, reset } = useForm<FieldValues, Todo>({
    defaultValues: {id: null, title: '', description: '', completed: false}
  });

  const onSubmit = (data: Partial<Todo>) => {
    props.onTodoSubmitClick(data as Todo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <TodoField name="title" control={control} fieldProps={{label: 'Todo Title'}} />
          <TodoField name="description" control={control} fieldProps={{label: 'Todo Description'}} />
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="button" size="small">Cancel</Button>
          <Button type="submit" size="small">Add</Button>
        </CardActions>
      </Card>
    </form>
  )
}
