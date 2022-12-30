// ** MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// ** Custom Components Imports
import PageHeader from './../../../@core/components/page-header';
// ** Demo Components Imports
import TableBasic from './../../../views/table/mui/TableBasic';
import TableCollapsible from './../../../views/table/mui/TableCollapsible';
import TableCustomized from './../../../views/table/mui/TableCustomized';
import TableDense from './../../../views/table/mui/TableDense';
import TableSortSelect from './../../../views/table/mui/TableSortSelect';
import TableSpanning from './../../../views/table/mui/TableSpanning';
import TableStickyHeader from './../../../views/table/mui/TableStickyHeader';

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant="h5">
            <Link href="https://mui.com/material-ui/react-table/" target="_blank">
              MUI Tables
            </Link>
          </Typography>
        }
        subtitle={<Typography variant="body2">Tables display sets of data. They can be fully customized</Typography>}
      />
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Basic Table" />
          <TableBasic />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Dense Table" />
          <TableDense />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Sticky Header" />
          <TableStickyHeader />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Collapsible Table" />
          <TableCollapsible />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Spanning Table" />
          <TableSpanning />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Customized Table" />
          <TableCustomized />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableSortSelect />
        </Card>
      </Grid>
    </Grid>
  );
};

export default MUITable;
