// ** MUI Imports
import Grid from '@mui/material/Grid';

import TypographyHeadings from './../../../views/ui/typography/TypographyHeadings';
// ** Demo Components Imports
import TypographyTexts from './../../../views/ui/typography/TypographyTexts';

const TypographyPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TypographyHeadings />
      </Grid>
      <Grid item xs={12}>
        <TypographyTexts />
      </Grid>
    </Grid>
  );
};

export default TypographyPage;
