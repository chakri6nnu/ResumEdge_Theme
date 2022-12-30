// ** React Imports
import Pagination from '@mui/material/Pagination';
// ** MUI Imports
import Typography from '@mui/material/Typography';
import { ChangeEvent, useState } from 'react';

const PaginationControlled = () => {
  // ** State
  const [page, setPage] = useState<number>(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Typography sx={{ mb: 2 }}>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
};

export default PaginationControlled;
