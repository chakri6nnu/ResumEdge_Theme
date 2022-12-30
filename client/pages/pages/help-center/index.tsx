// ** Next Imports
// ** MUI Imports
import Card from '@mui/material/Card';
import CardContent, { CardContentProps } from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// ** Third Party Imports
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';

// ** Types
import { HelpCenterArticlesOverviewType, HelpCenterCategoriesType } from './../../../@fake-db/types';
import HelpCenterLandingArticlesOverview from './../../../views/pages/help-center/landing/HelpCenterLandingArticlesOverview';
import HelpCenterLandingFooter from './../../../views/pages/help-center/landing/HelpCenterLandingFooter';
// ** Demo Imports
import HelpCenterLandingHeader from './../../../views/pages/help-center/landing/HelpCenterLandingHeader';
import HelpCenterLandingKnowledgeBase from './../../../views/pages/help-center/landing/HelpCenterLandingKnowledgeBase';

type ApiDataType = {
  categories: HelpCenterCategoriesType[];
  keepLearning: HelpCenterArticlesOverviewType[];
  popularArticles: HelpCenterArticlesOverviewType[];
};

const StyledCardContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  paddingTop: `${theme.spacing(20)} !important`,
  paddingBottom: `${theme.spacing(20)} !important`,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: `${theme.spacing(20)} !important`,
    paddingRight: `${theme.spacing(20)} !important`,
  },
}));

const HelpCenter = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Card>
      {apiData !== null ? (
        <>
          <HelpCenterLandingHeader data={apiData.categories} allArticles={apiData.allArticles} />
          <StyledCardContent>
            <Typography variant="h5" sx={{ mb: 6, fontWeight: 600, textAlign: 'center' }}>
              Popular Articles
            </Typography>
            <HelpCenterLandingArticlesOverview articles={apiData.popularArticles} />
          </StyledCardContent>
          <StyledCardContent sx={{ backgroundColor: 'action.hover' }}>
            <Typography variant="h5" sx={{ mb: 6, fontWeight: 600, textAlign: 'center' }}>
              Knowledge Base
            </Typography>
            <HelpCenterLandingKnowledgeBase categories={apiData.categories} />
          </StyledCardContent>
          <StyledCardContent>
            <Typography variant="h5" sx={{ mb: 6, fontWeight: 600, textAlign: 'center' }}>
              Keep Learning
            </Typography>
            <HelpCenterLandingArticlesOverview articles={apiData.keepLearning} />
          </StyledCardContent>
          <StyledCardContent sx={{ textAlign: 'center', backgroundColor: 'action.hover' }}>
            <HelpCenterLandingFooter />
          </StyledCardContent>
        </>
      ) : null}
    </Card>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/help-center/landing');
  const apiData: ApiDataType = res.data;

  return {
    props: {
      apiData,
    },
  };
};

export default HelpCenter;
