// ** MUI Imports
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CardSnippet from './../../../@core/components/card-snippet';
// ** Custom Components Imports
import PageHeader from './../../../@core/components/page-header';
// ** Hook Import
import { useSettings } from './../../../@core/hooks/useSettings';
// ** Styled Component Import
import KeenSliderWrapper from './../../../@core/styles/libs/keen-slider';
import SwiperAutoSwitch from './../../../views/components/swiper/SwiperAutoSwitch';
import SwiperCentered from './../../../views/components/swiper/SwiperCentered';
import SwiperControls from './../../../views/components/swiper/SwiperControls';
import SwiperDefault from './../../../views/components/swiper/SwiperDefault';
import SwiperFader from './../../../views/components/swiper/SwiperFader';
import SwiperFreeMode from './../../../views/components/swiper/SwiperFreeMode';
// ** Demo Components Imports
import SwiperLoop from './../../../views/components/swiper/SwiperLoop';
import SwiperMultipleSlides from './../../../views/components/swiper/SwiperMultipleSlides';
import SwiperMutationObserver from './../../../views/components/swiper/SwiperMutationObserver';
// ** Source code imports
import * as source from './../../../views/components/swiper/SwiperSourceCode';
import SwiperSpacing from './../../../views/components/swiper/SwiperSpacing';
import SwiperThumbnails from './../../../views/components/swiper/SwiperThumbnails';
import SwiperVertical from './../../../views/components/swiper/SwiperVertical';
import SwiperZoom from './../../../views/components/swiper/SwiperZoom';

const Swiper = () => {
  // ** Hook
  const {
    settings: { direction },
  } = useSettings();

  return (
    <KeenSliderWrapper>
      <Grid container spacing={6} className="match-height">
        <PageHeader
          subtitle={<Typography variant="body2">Easily create sliders, carousels and much more</Typography>}
          title={
            <Typography variant="h5">
              <Link href="https://github.com/rcbyr/keen-slider" target="_blank">
                Keen Slider
              </Link>
            </Typography>
          }
        />
        <Grid item xs={12}>
          <CardSnippet
            title="Default"
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode,
            }}
          >
            <SwiperDefault direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Loop"
            code={{
              tsx: source.SwiperLoopTSXCode,
              jsx: source.SwiperLoopJSXCode,
            }}
          >
            <SwiperLoop direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Multiple Slides"
            code={{
              tsx: source.SwiperMultipleSlidesTSXCode,
              jsx: source.SwiperMultipleSlidesJSXCode,
            }}
          >
            <SwiperMultipleSlides direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Spacing"
            code={{
              tsx: source.SwiperSpacingTSXCode,
              jsx: source.SwiperSpacingJSXCode,
            }}
          >
            <SwiperSpacing direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="FreeMode"
            code={{
              tsx: source.SwiperFreeModeTSXCode,
              jsx: source.SwiperFreeModeJSXCode,
            }}
          >
            <SwiperFreeMode direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Centered"
            code={{
              tsx: source.SwiperCenteredTSXCode,
              jsx: source.SwiperCenteredJSXCode,
            }}
          >
            <SwiperCentered direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Vertical"
            code={{
              tsx: source.SwiperVerticalTSXCode,
              jsx: source.SwiperVerticalJSXCode,
            }}
          >
            <SwiperVertical />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Controls"
            code={{
              tsx: source.SwiperControlsTSXCode,
              jsx: source.SwiperControlsJSXCode,
            }}
          >
            <SwiperControls direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Thumbnails"
            code={{
              tsx: source.SwiperThumbnailsTSXCode,
              jsx: source.SwiperThumbnailsJSXCode,
            }}
          >
            <SwiperThumbnails direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Fader"
            code={{
              tsx: source.SwiperFaderTSXCode,
              jsx: source.SwiperFaderJSXCode,
            }}
          >
            <SwiperFader direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Zoom"
            code={{
              tsx: source.SwiperZoomTSXCode,
              jsx: source.SwiperZoomJSXCode,
            }}
          >
            <SwiperZoom direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Auto Switch"
            code={{
              tsx: source.SwiperAutoSwitchTSXCode,
              jsx: source.SwiperAutoSwitchJSXCode,
            }}
          >
            <SwiperAutoSwitch direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Mutation Observer"
            code={{
              tsx: source.SwiperMutationObserverTSXCode,
              jsx: source.SwiperMutationObserverJSXCode,
            }}
          >
            <SwiperMutationObserver direction={direction} />
          </CardSnippet>
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  );
};

export default Swiper;
