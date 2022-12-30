// ** Next Import
// ** Third Party Imports
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types';

// ** Types
import { MailLayoutType, MailType } from './../../../../types/apps/emailTypes';
// ** Demo Components Imports
import Email from './../../../../views/apps/email/Email';

const EmailApp = ({ label }: MailLayoutType) => {
  return <Email label={label} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/apps/email/allEmails');
  const data: MailType[] = await res.data.emails;

  const paths = data.map((mail: MailType) => ({
    params: { label: mail.labels[0] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      ...(params && params.label ? { label: params.label } : {}),
    },
  };
};

EmailApp.contentHeightFixed = true;

export default EmailApp;