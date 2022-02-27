import { TextField, TextFieldProps } from '@mui/material';
import { Controller, ControllerProps } from 'react-hook-form';

interface TodoFieldProps extends Omit<ControllerProps, "render"> {
  fieldProps?: TextFieldProps;
}

export const TodoField = ({fieldProps, ...props}: TodoFieldProps) => {
  const defaultFieldProps = {fullWidth: true, margin: 'dense' as 'dense' | 'none' | 'normal'};
  return (
    <Controller {...props} render={({ field }) => <TextField {...field} {...defaultFieldProps} {...fieldProps} />} />
  )
}
