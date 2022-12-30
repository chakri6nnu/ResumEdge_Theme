// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CardAppleWatch from './../../../../views/ui/cards/basic/CardAppleWatch';
import CardFacebook from './../../../../views/ui/cards/basic/CardFacebook';
import CardHorizontalRatings from './../../../../views/ui/cards/basic/CardHorizontalRatings';
import CardImgTop from './../../../../views/ui/cards/basic/CardImgTop';
import CardInfluencer from './../../../../views/ui/cards/basic/CardInfluencer';
import CardLinkedIn from './../../../../views/ui/cards/basic/CardLinkedIn';
import CardMembership from './../../../../views/ui/cards/basic/CardMembership';
import CardMobile from './../../../../views/ui/cards/basic/CardMobile';
import CardNavigation from './../../../../views/ui/cards/basic/CardNavigation';
import CardNavigationCenter from './../../../../views/ui/cards/basic/CardNavigationCenter';
import CardSupport from './../../../../views/ui/cards/basic/CardSupport';
import CardTwitter from './../../../../views/ui/cards/basic/CardTwitter';
// ** Demo Components Imports
import CardUser from './../../../../views/ui/cards/basic/CardUser';
import CardVerticalRatings from './../../../../views/ui/cards/basic/CardVerticalRatings';
import CardWithCollapse from './../../../../views/ui/cards/basic/CardWithCollapse';

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">Basic Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardMembership />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(12)} !important` }}>
        <Typography variant="h5">Navigation Cards</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigation />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigationCenter />
      </Grid>
      <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(12)} !important` }}>
        <Typography variant="h5">Solid Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  );
};

export default CardBasic;
