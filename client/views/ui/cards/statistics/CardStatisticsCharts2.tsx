// ** MUI Imports
import Grid from '@mui/material/Grid';

import CardStatsOrdersImpressions from './../../../../views/ui/cards/statistics/CardStatsOrdersImpressions';
// ** Demo Components Imports
import CardStatsSalesMonth from './../../../../views/ui/cards/statistics/CardStatsSalesMonth';
import CardStatsSalesProfit from './../../../../views/ui/cards/statistics/CardStatsSalesProfit';
import CardStatsTotalVisits from './../../../../views/ui/cards/statistics/CardStatsTotalVisits';

const CardStatisticsCharts2 = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} lg={3}>
        <CardStatsSalesProfit />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardStatsTotalVisits />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardStatsSalesMonth />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardStatsOrdersImpressions />
      </Grid>
    </Grid>
  );
};

export default CardStatisticsCharts2;
