// ** MUI Import
import Grid from '@mui/material/Grid';

// ** Custom Components Imports
import CardStatisticsCharacter from './../../../../@core/components/card-statistics/card-stats-with-image';
// ** Type Import
import { CardStatsCharacterProps } from './../../../../@core/components/card-statistics/types';

interface Props {
  data: CardStatsCharacterProps[];
}

const CardStatsCharacter = ({ data }: Props) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsCharacter data={data[0]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsCharacter data={data[1]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsCharacter data={data[2]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsCharacter data={data[3]} />
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};

export default CardStatsCharacter;
