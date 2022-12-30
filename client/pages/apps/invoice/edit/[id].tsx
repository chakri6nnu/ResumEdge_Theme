// ** Next Import
// ** Third Party Imports
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types';

// ** Styled Component
import DatePickerWrapper from './../../../../@core/styles/libs/react-datepicker';
// ** Types
import { InvoiceType } from './../../../../types/apps/invoiceTypes';
// ** Demo Components Imports
import Edit from './../../../../views/apps/invoice/edit/Edit';

const InvoiceEdit = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
      <Edit id={id} />
    </DatePickerWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/apps/invoice/invoices');
  const data: InvoiceType[] = await res.data.allData;

  const paths = data.map((item: InvoiceType) => ({
    params: { id: `${item.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      id: params?.id,
    },
  };
};

export default InvoiceEdit;
