// ** MUI Imports
import Grid from '@mui/material/Grid';

import CardActivityTimeline from './../../../../views/ui/cards/advanced/CardActivityTimeline';
// ** Demo Components Imports
import CardFinanceApp from './../../../../views/ui/cards/advanced/CardFinanceApp';
import CardGeneralStatistics from './../../../../views/ui/cards/advanced/CardGeneralStatistics';
import CardMeetingSchedule from './../../../../views/ui/cards/advanced/CardMeetingSchedule';
import CardPaymentHistory from './../../../../views/ui/cards/advanced/CardPaymentHistory';
import CardPlanUpgrade from './../../../../views/ui/cards/advanced/CardPlanUpgrade';
import CardProjectStatistics from './../../../../views/ui/cards/advanced/CardProjectStatistics';
import CardSalesInCountries from './../../../../views/ui/cards/advanced/CardSalesInCountries';
import CardSocialNetworkVisits from './../../../../views/ui/cards/advanced/CardSocialNetworkVisits';
import CardSubscribersByCountries from './../../../../views/ui/cards/advanced/CardSubscribersByCountries';
import CardTopReferralSources from './../../../../views/ui/cards/advanced/CardTopReferralSources';
import CardTotalEarnings from './../../../../views/ui/cards/advanced/CardTotalEarings';
import CardTransactions from './../../../../views/ui/cards/advanced/CardTransactions';

const CardsAdvanced = () => {
  return (
    <Grid container spacing={6} className="match-height">
      <Grid item xs={12} md={6} lg={4}>
        <CardTransactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardPlanUpgrade />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardMeetingSchedule />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardProjectStatistics />
      </Grid>
      <Grid item xs={12} lg={8}>
        <CardTopReferralSources />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardTotalEarnings />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardSocialNetworkVisits />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardGeneralStatistics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardSalesInCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardPaymentHistory />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardSubscribersByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <CardActivityTimeline />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardFinanceApp />
      </Grid>
    </Grid>
  );
};

export default CardsAdvanced;
