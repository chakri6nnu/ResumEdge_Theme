// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Custom Components Imports
import CardSnippet from './../../../@core/components/card-snippet';
import TimelineCenter from './../../../views/components/timeline/TimelineCenter';
// ** Demo Components Imports
import TimelineFilled from './../../../views/components/timeline/TimelineFilled';
import TimelineOutlined from './../../../views/components/timeline/TimelineOutlined';
// ** Source code imports
import * as source from './../../../views/components/timeline/TimelineSourceCode';

const TreeView = () => {
  return (
    <Grid container spacing={6} className="match-height">
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Timeline Filled"
          code={{
            tsx: source.TimelineFilledTSXCode,
            jsx: source.TimelineFilledJSXCode,
          }}
        >
          <TimelineFilled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Timeline Outlined"
          code={{
            tsx: source.TimelineOutlinedTSXCode,
            jsx: source.TimelineOutlinedJSXCode,
          }}
        >
          <TimelineOutlined />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title="Timeline Center With Icons"
          code={{
            tsx: source.TimelineCenterTSXCode,
            jsx: source.TimelineCenterJSXCode,
          }}
        >
          <TimelineCenter />
        </CardSnippet>
      </Grid>
    </Grid>
  );
};

export default TreeView;
