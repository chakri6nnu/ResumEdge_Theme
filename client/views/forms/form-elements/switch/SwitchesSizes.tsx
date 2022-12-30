// ** MUI Imports
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

const SwitchesSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch size="small" />} label="Small" />
      <FormControlLabel control={<Switch />} label="Default" />
    </FormGroup>
  );
};

export default SwitchesSizes;
