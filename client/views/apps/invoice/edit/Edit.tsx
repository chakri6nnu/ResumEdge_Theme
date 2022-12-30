// ** React Imports
import Alert from '@mui/material/Alert';
// ** MUI Imports
import Grid from '@mui/material/Grid';
// ** Third Party Components
import axios from 'axios';
// ** Next Import
import Link from 'next/link';
import { useEffect, useState } from 'react';

// ** Types
import { InvoiceLayoutProps, SingleInvoiceType } from './../../../../types/apps/invoiceTypes';
import AddPaymentDrawer from './../../../../views/apps/invoice/shared-drawer/AddPaymentDrawer';
import SendInvoiceDrawer from './../../../../views/apps/invoice/shared-drawer/SendInvoiceDrawer';
import EditActions from './EditActions';
// ** Demo Components Imports
import EditCard from './EditCard';

const InvoiceEdit = ({ id }: InvoiceLayoutProps) => {
  // ** State
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<null | SingleInvoiceType>(null);
  const [addPaymentOpen, setAddPaymentOpen] = useState<boolean>(false);
  const [sendInvoiceOpen, setSendInvoiceOpen] = useState<boolean>(false);

  const toggleSendInvoiceDrawer = () => setSendInvoiceOpen(!sendInvoiceOpen);
  const toggleAddPaymentDrawer = () => setAddPaymentOpen(!addPaymentOpen);

  useEffect(() => {
    axios
      .get('/apps/invoice/single-invoice', { params: { id } })
      .then((res) => {
        setData(res.data);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setError(true);
      });
  }, [id]);

  if (data) {
    return (
      <>
        <Grid container spacing={6}>
          <Grid item xl={9} md={8} xs={12}>
            <EditCard data={data} />
          </Grid>
          <Grid item xl={3} md={4} xs={12}>
            <EditActions
              id={id}
              toggleSendInvoiceDrawer={toggleSendInvoiceDrawer}
              toggleAddPaymentDrawer={toggleAddPaymentDrawer}
            />
          </Grid>
        </Grid>
        <SendInvoiceDrawer open={sendInvoiceOpen} toggle={toggleSendInvoiceDrawer} />
        <AddPaymentDrawer open={addPaymentOpen} toggle={toggleAddPaymentDrawer} />
      </>
    );
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity="error">
            Invoice with the id: {id} does not exist. Please check the list of invoices:{' '}
            <Link href="/apps/invoice/list">Invoice List</Link>
          </Alert>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};

export default InvoiceEdit;
