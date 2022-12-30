// ** React Imports
// ** MUI Imports
import Card from '@mui/material/Card';
import MuiCardContent, { CardContentProps } from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
// ** Third Party Imports
import axios from 'axios';
// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { ChangeEvent, useState } from 'react';

// ** Types
import { PricingDataType } from './../../../@core/components/plan-details/types';
// ** Demo Imports
import PricingCTA from './../../../views/pages/pricing/PricingCTA';
import PricingFooter from './../../../views/pages/pricing/PricingFooter';
import PricingHeader from './../../../views/pages/pricing/PricingHeader';
import PricingPlans from './../../../views/pages/pricing/PricingPlans';
import PricingTable from './../../../views/pages/pricing/PricingTable';

// ** Styled Components
const CardContent = styled(MuiCardContent)<CardContentProps>(({ theme }) => ({
  padding: `${theme.spacing(20, 36)} !important`,
  [theme.breakpoints.down('xl')]: {
    padding: `${theme.spacing(20)} !important`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(10, 5)} !important`,
  },
}));

const Pricing = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** States
  const [plan, setPlan] = useState<'monthly' | 'annually'>('annually');

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPlan('annually');
    } else {
      setPlan('monthly');
    }
  };

  return (
    <Card>
      <CardContent>
        <PricingHeader plan={plan} handleChange={handleChange} />
        <PricingPlans plan={plan} data={apiData.pricingPlans} />
      </CardContent>
      <PricingCTA />
      <CardContent>
        <PricingTable data={apiData} />
      </CardContent>
      <CardContent sx={{ backgroundColor: 'action.hover' }}>
        <PricingFooter data={apiData} />
      </CardContent>
    </Card>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/pricing');
  const apiData: PricingDataType = res.data;

  return {
    props: {
      apiData,
    },
  };
};

export default Pricing;
