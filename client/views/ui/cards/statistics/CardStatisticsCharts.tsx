// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Demo Components Imports
import CardStatisticsBarChart from './../../../../views/ui/cards/statistics/CardStatisticsBarChart';
import CardStatisticsDonutChart from './../../../../views/ui/cards/statistics/CardStatisticsDonutChart';
import CardStatisticsLineChart from './../../../../views/ui/cards/statistics/CardStatisticsLineChart';
import CardStatisticsRadialBarChart from './../../../../views/ui/cards/statistics/CardStatisticsRadialBarChart';
import CardStatisticsSmoothLineChart from './../../../../views/ui/cards/statistics/CardStatisticsSmoothLineChart';
import CardStatisticsStackedBarChart from './../../../../views/ui/cards/statistics/CardStatisticsStackedBarChart';

const CardStatisticsCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={4} lg={2}>
        <CardStatisticsBarChart />
      </Grid>
      <Grid item xs={12} sm={4} lg={2}>
        <CardStatisticsLineChart />
      </Grid>
      <Grid item xs={12} sm={4} lg={2}>
        <CardStatisticsRadialBarChart />
      </Grid>
      <Grid item xs={12} sm={4} lg={2}>
        <CardStatisticsStackedBarChart />
      </Grid>
      <Grid item xs={12} sm={4} lg={2}>
        <CardStatisticsSmoothLineChart />
      </Grid>
      <Grid item xs={12} sm={4} lg={2}>
        <CardStatisticsDonutChart />
      </Grid>
    </Grid>
  );
};

export default CardStatisticsCharts;
