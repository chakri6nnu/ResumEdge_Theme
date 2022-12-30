// ** Next Imports
// ** MUI Imports
import Grid from '@mui/material/Grid';
// ** Third Party Components
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';

// ** Styled Component Import
import KeenSliderWrapper from './../../../../@core/styles/libs/keen-slider';
import ApexChartWrapper from './../../../../@core/styles/libs/react-apexcharts';
// ** Type Import
import { CardStatsType } from './../../../../@fake-db/types';
import CardStatisticsCharacters from './../../../../views/ui/cards/statistics/CardStatisticsCharacters';
import CardStatisticsCharts from './../../../../views/ui/cards/statistics/CardStatisticsCharts';
import CardStatisticsCharts2 from './../../../../views/ui/cards/statistics/CardStatisticsCharts2';
import CardStatisticsHorizontal from './../../../../views/ui/cards/statistics/CardStatisticsHorizontal';
import CardStatisticsLiveVisitors from './../../../../views/ui/cards/statistics/CardStatisticsLiveVisitors';
import CardStatisticsMarketingSales from './../../../../views/ui/cards/statistics/CardStatisticsMarketingSales';
// ** Demo Components Imports
import CardStatisticsSales from './../../../../views/ui/cards/statistics/CardStatisticsSales';
import CardStatisticsVertical from './../../../../views/ui/cards/statistics/CardStatisticsVertical';
import CardStatisticsWeeklySales from './../../../../views/ui/cards/statistics/CardStatisticsWeeklySales';
import CardStatisticsWeeklySalesBg from './../../../../views/ui/cards/statistics/CardStatisticsWeeklySalesBg';

const CardStatistics = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CardStatisticsHorizontal data={apiData.statsHorizontal} />
          </Grid>
          <Grid item xs={12}>
            <CardStatisticsCharacters data={apiData.statsCharacter} />
          </Grid>
          <Grid item xs={12}>
            <CardStatisticsVertical data={apiData.statsVertical} />
          </Grid>
          <Grid item xs={12}>
            <CardStatisticsCharts />
          </Grid>
          <Grid item xs={12}>
            <CardStatisticsCharts2 />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardStatisticsWeeklySales />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardStatisticsMarketingSales />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardStatisticsWeeklySalesBg />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardStatisticsSales />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardStatisticsLiveVisitors />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics');
  const apiData: CardStatsType = res.data;

  return {
    props: {
      apiData,
    },
  };
};

export default CardStatistics;
