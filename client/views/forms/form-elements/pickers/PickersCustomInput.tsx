// ** React Imports
// ** MUI Imports
import TextField from '@mui/material/TextField';
import { forwardRef } from 'react';

interface PickerProps {
  label?: string;
  readOnly?: boolean;
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  // ** Props
  const { label, readOnly } = props;

  return (
    <TextField inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />
  );
});

export default PickersComponent;
