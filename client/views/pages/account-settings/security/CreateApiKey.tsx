// ** MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form';

const CreateApiKeyCard = () => {
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { apiKeyName: '' } });

  const onSubmit = () => {
    return true;
  };

  return (
    <Card>
      <CardHeader title="Create an API key" />
      <CardContent sx={{ pb: '0 !important' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 5 }}>
                <InputLabel>Choose The Api Key Type You Want To Create</InputLabel>
                <Select label="Choose The Api Key Type You Want To Create" defaultValue="">
                  <MenuItem value="full-control">Full Control</MenuItem>
                  <MenuItem value="modify">Modify</MenuItem>
                  <MenuItem value="read-execute">Read Execute</MenuItem>
                  <MenuItem value="list-folder-contents">List Folder Contents</MenuItem>
                  <MenuItem value="read-only">Read Only</MenuItem>
                  <MenuItem value="read-write">Read Write</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 5 }}>
                <Controller
                  name="apiKeyName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name The Api Key"
                      placeholder="Api Key 1"
                      error={Boolean(errors.apiKeyName)}
                    />
                  )}
                />
                {errors.apiKeyName && (
                  <FormHelperText sx={{ color: 'error.main' }}>Please enter API key name</FormHelperText>
                )}
              </FormControl>
              <Button type="submit" variant="contained" fullWidth>
                Create Key
              </Button>
            </form>
          </Grid>

          <Grid item md={6} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img alt="avatar" height={220} src="/images/pages/account-settings-security-illustration.png" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CreateApiKeyCard;
