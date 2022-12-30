// ** Next Import
// ** Third Party Imports
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types';

// ** Types
import { InvoiceType } from './../../../../types/apps/invoiceTypes';
// ** Demo Components Imports
import UserViewPage from './../../../../views/apps/user/view/UserViewPage';

const UserView = ({ tab, invoiceData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserViewPage tab={tab} invoiceData={invoiceData} />;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'overview' } },
      { params: { tab: 'security' } },
      { params: { tab: 'billing-plan' } },
      { params: { tab: 'notification' } },
      { params: { tab: 'connection' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/apps/invoice/invoices');
  const invoiceData: InvoiceType[] = res.data.allData;

  return {
    props: {
      invoiceData,
      tab: params?.tab,
    },
  };
};

export default UserView;
