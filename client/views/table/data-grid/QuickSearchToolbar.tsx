// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { GridToolbarFilterButton } from '@mui/x-data-grid';
import { ChangeEvent } from 'react';

// ** Icon Imports
import Icon from './../../../@core/components/icon';

interface Props {
  value: string;
  clearSearch: () => void;
  onChange: (e: ChangeEvent) => void;
}

const QuickSearchToolbar = (props: Props) => {
  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(2, 5, 4, 5),
      }}
    >
      <GridToolbarFilterButton />
      <TextField
        size="small"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: (
            <Box sx={{ mr: 2, display: 'flex' }}>
              <Icon icon="mdi:magnify" fontSize={20} />
            </Box>
          ),
          endAdornment: (
            <IconButton size="small" title="Clear" aria-label="Clear" onClick={props.clearSearch}>
              <Icon icon="mdi:close" fontSize={20} />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          '& .MuiInputBase-root > svg': {
            mr: 2,
          },
        }}
      />
    </Box>
  );
};

export default QuickSearchToolbar;
