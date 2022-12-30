// ** React Imports
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
// ** MUI Imports
import Switch from '@mui/material/Switch';
import { ChangeEvent, useState } from 'react';

const SwitchesControlledUncontrolled = () => {
  // ** State
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel label="Controlled" control={<Switch checked={checked} onChange={handleChange} />} />
      <FormControlLabel control={<Switch />} label="Uncontrolled" />
    </FormGroup>
  );
};

export default SwitchesControlledUncontrolled;
