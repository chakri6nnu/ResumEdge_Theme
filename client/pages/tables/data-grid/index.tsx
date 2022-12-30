// ** MUI Imports
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// ** Custom Components Imports
import PageHeader from './../../../@core/components/page-header';
// ** Demo Components Imports
import TableBasic from './../../../views/table/data-grid/TableBasic';
import TableBasicSort from './../../../views/table/data-grid/TableBasicSort';
import TableColumns from './../../../views/table/data-grid/TableColumns';
import TableEditable from './../../../views/table/data-grid/TableEditable';
import TableFilter from './../../../views/table/data-grid/TableFilter';
import TableSelection from './../../../views/table/data-grid/TableSelection';
import TableServerSide from './../../../views/table/data-grid/TableServerSide';

const DataGrid = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant="h5">
            <Link href="https://mui.com/x/react-data-grid/" target="_blank">
              Data Grid
            </Link>
          </Typography>
        }
        subtitle={
          <Typography variant="body2">
            Data Grid is a fast and extendable react data table and react data grid.
          </Typography>
        }
      />
      <Grid item xs={12}>
        <TableBasic />
      </Grid>
      <Grid item xs={12}>
        <TableEditable />
      </Grid>
      <Grid item xs={12}>
        <TableColumns />
      </Grid>
      <Grid item xs={12}>
        <TableBasicSort />
      </Grid>
      <Grid item xs={12}>
        <TableFilter />
      </Grid>
      <Grid item xs={12}>
        <TableSelection />
      </Grid>
      <Grid item xs={12}>
        <TableServerSide />
      </Grid>
    </Grid>
  );
};

export default DataGrid;
