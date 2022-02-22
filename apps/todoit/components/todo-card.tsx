import { Card, CardContent, TextField, CardActions, Button } from '@mui/material'
import React from 'react'

export const TodoCard = () => {
  return (
    <form>
      <Card>
        <CardContent>
          <TextField fullWidth margin="dense" label="Todo Title" />
          <TextField fullWidth margin="dense" label="Todo Description" />
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="button" size="small">Cancel</Button>
          <Button type="submit" size="small">Add</Button>
        </CardActions>
      </Card>
    </form>
  )
}
