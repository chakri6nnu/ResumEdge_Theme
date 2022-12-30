// ** React Imports
// ** MUI Imports
import Grid from '@mui/material/Grid';
// ** Third Party Components
import axios from 'axios';
// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { useState } from 'react';

// ** Styled Component
import DatePickerWrapper from './../../../../@core/styles/libs/react-datepicker';
// ** Types
import { InvoiceClientType, InvoiceType } from './../../../../types/apps/invoiceTypes';
import AddActions from './../../../../views/apps/invoice/add/AddActions';
// ** Demo Components Imports
import AddCard from './../../../../views/apps/invoice/add/AddCard';
import AddNewCustomers from './../../../../views/apps/invoice/add/AddNewCustomer';

const InvoiceAdd = ({ apiClientData, invoiceNumber }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** State
  const [addCustomerOpen, setAddCustomerOpen] = useState<boolean>(false);
  const [selectedClient, setSelectedClient] = useState<InvoiceClientType | null>(null);
  const [clients, setClients] = useState<InvoiceClientType[] | undefined>(apiClientData);

  const toggleAddCustomerDrawer = () => setAddCustomerOpen(!addCustomerOpen);

  return (
    <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
      <Grid container spacing={6}>
        <Grid item xl={9} md={8} xs={12}>
          <AddCard
            clients={clients}
            invoiceNumber={invoiceNumber}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            toggleAddCustomerDrawer={toggleAddCustomerDrawer}
          />
        </Grid>
        <Grid item xl={3} md={4} xs={12}>
          <AddActions />
        </Grid>
      </Grid>
      <AddNewCustomers
        clients={clients}
        open={addCustomerOpen}
        setClients={setClients}
        toggle={toggleAddCustomerDrawer}
        setSelectedClient={setSelectedClient}
      />
    </DatePickerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const clientResponse = await axios.get('/apps/invoice/clients');
  const apiClientData: InvoiceClientType = clientResponse.data;

  const allInvoicesResponse = await axios.get('/apps/invoice/invoices', { params: { q: '', status: '' } });
  const lastInvoiceNumber = Math.max(...allInvoicesResponse.data.allData.map((i: InvoiceType) => i.id));

  return {
    props: {
      apiClientData,
      invoiceNumber: lastInvoiceNumber + 1,
    },
  };
};

export default InvoiceAdd;
