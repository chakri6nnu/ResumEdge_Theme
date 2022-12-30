// ** Next Import
// ** Third Party Imports
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types';

// ** Types
import { InvoiceType } from './../../../../types/apps/invoiceTypes';
// ** Demo Components Imports
import Preview from './../../../../views/apps/invoice/preview/Preview';

const InvoicePreview = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Preview id={id} />;
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

export default InvoicePreview;
