// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// ** Third Party Imports
import axios from 'axios';
// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { Fragment, SyntheticEvent, useEffect, useState } from 'react';

// ** Icon Imports
import Icon from './../../../@core/components/icon';
// ** Types
import { FaqType } from './../../../@fake-db/types';
import FaqFooter from './../../../views/pages/faq/FaqFooter';
import FaqHeader from './../../../views/pages/faq/FaqHeader';
// ** Demo Imports
import FAQS from './../../../views/pages/faq/Faqs';

const FAQ = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** States
  const [data, setData] = useState<{ faqData: FaqType } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<any>('payment');

  useEffect(() => {
    if (searchTerm !== '') {
      axios.get('/pages/faqs', { params: { q: searchTerm } }).then((response: any) => {
        if (response.data.faqData && Object.values(response.data.faqData).length) {
          setData(response.data);

          // setActiveTab(Object.values(response.data.faqData)[0].id as any);
        } else {
          setData(null);
        }
      });
    } else {
      setData(apiData);
    }
  }, [apiData, searchTerm]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const renderNoResult = (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', '& svg': { mr: 2 } }}>
      <Icon icon="mdi:alert-circle-outline" />
      <Typography variant="h6">No Results Found!!</Typography>
    </Box>
  );

  return (
    <Fragment>
      <FaqHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {data !== null ? <FAQS data={data} activeTab={activeTab} handleChange={handleChange} /> : renderNoResult}
      <FaqFooter />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/faqs');
  const apiData: FaqType = res.data;

  return {
    props: {
      apiData,
    },
  };
};

export default FAQ;
