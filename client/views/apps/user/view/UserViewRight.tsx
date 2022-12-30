// ** React Imports
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// ** MUI Imports
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import MuiTab, { TabProps } from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// ** Next Import
import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect, useState } from 'react';

// ** Icon Imports
import Icon from './../../../../@core/components/icon';
// ** Types
import { InvoiceType } from './../../../../types/apps/invoiceTypes';
// ** Demo Components Imports
import UserViewBilling from './../../../../views/apps/user/view/UserViewBilling';
import UserViewConnection from './../../../../views/apps/user/view/UserViewConnection';
import UserViewNotification from './../../../../views/apps/user/view/UserViewNotification';
import UserViewOverview from './../../../../views/apps/user/view/UserViewOverview';
import UserViewSecurity from './../../../../views/apps/user/view/UserViewSecurity';

interface Props {
  tab: string;
  invoiceData: InvoiceType[];
}

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1),
  },
}));

const UserViewRight = ({ tab, invoiceData }: Props) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ** Hooks
  const router = useRouter();

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    router
      .push({
        pathname: `/apps/user/view/${value.toLowerCase()}`,
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  useEffect(() => {
    if (invoiceData) {
      setIsLoading(false);
    }
  }, [invoiceData]);

  return (
    <TabContext value={activeTab}>
      <TabList
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
        aria-label="forced scroll tabs example"
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value="overview" label="Overview" icon={<Icon icon="mdi:account-outline" />} />
        <Tab value="security" label="Security" icon={<Icon icon="mdi:lock-outline" />} />
        <Tab value="billing-plan" label="Billing & Plan" icon={<Icon icon="mdi:bookmark-outline" />} />
        <Tab value="notification" label="Notification" icon={<Icon icon="mdi:bell-outline" />} />
        <Tab value="connection" label="Connection" icon={<Icon icon="mdi:link-variant" />} />
      </TabList>
      <Box sx={{ mt: 6 }}>
        {isLoading ? (
          <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <>
            <TabPanel sx={{ p: 0 }} value="overview">
              <UserViewOverview invoiceData={invoiceData} />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="security">
              <UserViewSecurity />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="billing-plan">
              <UserViewBilling />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="notification">
              <UserViewNotification />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="connection">
              <UserViewConnection />
            </TabPanel>
          </>
        )}
      </Box>
    </TabContext>
  );
};

export default UserViewRight;
