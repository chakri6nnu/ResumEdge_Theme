// ** MUI Imports
// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CardSnippet from './../../../../@core/components/card-snippet';
// ** Custom Components Imports
import PageHeader from './../../../../@core/components/page-header';
// ** Styled Component Import
import { EditorWrapper } from './../../../../@core/styles/libs/react-draft-wysiwyg';
// ** Demo Components Imports
import EditorControlled from './../../../../views/forms/form-elements/editor/EditorControlled';
// ** Source code imports
import * as source from './../../../../views/forms/form-elements/editor/EditorSourceCode';
import EditorUncontrolled from './../../../../views/forms/form-elements/editor/EditorUncontrolled';

const Editors = () => {
  return (
    <EditorWrapper>
      <Grid container spacing={6} className="match-height">
        <PageHeader
          title={
            <Typography variant="h5">
              <Link href="https://jpuri.github.io/react-draft-wysiwyg/#/" target="_blank">
                React Draft Wysiwyg
              </Link>
            </Typography>
          }
          subtitle={<Typography variant="body2">A Wysiwyg Built on ReactJS and DraftJS</Typography>}
        />
        <Grid item xs={12}>
          <CardSnippet
            sx={{ overflow: 'visible' }}
            title="Controlled Wysiwyg Editor"
            code={{
              tsx: source.EditorControlledTSXCode,
              jsx: source.EditorControlledJSXCode,
            }}
          >
            <EditorControlled />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            sx={{ overflow: 'visible' }}
            title="Uncontrolled Wysiwyg Editor"
            code={{
              tsx: source.EditorUncontrolledTSXCode,
              jsx: source.EditorUncontrolledJSXCode,
            }}
          >
            <EditorUncontrolled />
          </CardSnippet>
        </Grid>
      </Grid>
    </EditorWrapper>
  );
};

export default Editors;
