// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// ** Custom Components Imports
import CardSnippet from './../../../../@core/components/card-snippet';
import RadioColor from './../../../../views/forms/form-elements/radio/RadioColor';
import RadioControlledUncontrolled from './../../../../views/forms/form-elements/radio/RadioControlledUncontrolled';
import RadioCustomized from './../../../../views/forms/form-elements/radio/RadioCustomized';
// ** Demo Components Imports
import RadioGroup from './../../../../views/forms/form-elements/radio/RadioGroup';
import RadioLabelPlacement from './../../../../views/forms/form-elements/radio/RadioLabelPlacement';
import RadioShowError from './../../../../views/forms/form-elements/radio/RadioShowError';
import RadioSizes from './../../../../views/forms/form-elements/radio/RadioSizes';
// ** Source code imports
import * as source from './../../../../views/forms/form-elements/radio/RadioSourceCode';
import RadioStandalone from './../../../../views/forms/form-elements/radio/RadioStandalone';

const Radios = () => {
  return (
    <Grid container spacing={6} className="match-height">
      <Grid item xs={12}>
        <CardSnippet
          title="RadioGroup"
          code={{
            tsx: source.RadioGroupTSXCode,
            jsx: source.RadioGroupJSXCode,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            <code>RadioGroup</code> is a helpful wrapper used to group <code>Radio</code> components that provides an
            easier API, and proper keyboard accessibility to the group.
          </Typography>
          <RadioGroup />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title="Controlled and Uncontrolled"
          code={{
            tsx: source.RadioControlledUncontrolledTSXCode,
            jsx: source.RadioControlledUncontrolledJSXCode,
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Manage <code>value</code> prop with <code>RadioGroup</code> component with the help of a state for
            controlled radio and <code>defaultValue</code> prop with <code>RadioGroup</code> component for uncontrolled
            radio.
          </Typography>
          <RadioControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Standalone Radio Buttons"
          code={{
            tsx: source.RadioStandaloneTSXCode,
            jsx: source.RadioStandaloneJSXCode,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            <code>Radio</code> can also be used standalone, without the RadioGroup wrapper.
          </Typography>
          <RadioStandalone />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Colors"
          code={{
            tsx: source.RadioColorTSXCode,
            jsx: source.RadioColorJSXCode,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Use <code>color</code> prop with <code>Radio</code> component for different colored radio button.
          </Typography>
          <RadioColor />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Sizes"
          code={{
            tsx: source.RadioSizesTSXCode,
            jsx: source.RadioSizesJSXCode,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Use <code>color</code> prop with <code>Radio</code> component for different colored radio button.
          </Typography>
          <RadioSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Customized Radio"
          code={{
            tsx: source.RadioCustomizedTSXCode,
            jsx: source.RadioCustomizedJSXCode,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Use <code>styled</code> hook to customize your radio button.
          </Typography>
          <RadioCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Label Placement"
          code={{
            tsx: source.RadioLabelPlacementTSXCode,
            jsx: source.RadioLabelPlacementJSXCode,
          }}
        >
          <Typography sx={{ mb: 4 }}>
            You can change the placement of the label with <code>FormControlLabel</code> components{' '}
            <code>labelPlacement</code> prop.
          </Typography>
          <RadioLabelPlacement />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title="Show Error"
          code={{
            tsx: source.RadioShowErrorTSXCode,
            jsx: source.RadioShowErrorJSXCode,
          }}
        >
          <Typography sx={{ mb: 4 }}>
            In general, radio buttons should have a value selected by default. If this is not the case, you can display
            an error if no value is selected when the form is submitted.
          </Typography>
          <RadioShowError />
        </CardSnippet>
      </Grid>
    </Grid>
  );
};

export default Radios;
