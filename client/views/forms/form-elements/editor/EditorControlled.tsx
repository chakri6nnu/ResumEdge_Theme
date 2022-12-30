// ** React Imports
// ** Third Party Imports
import { EditorState } from 'draft-js';
import { useState } from 'react';

// ** Component Import
import ReactDraftWysiwyg from './../../../../@core/components/react-draft-wysiwyg';

const EditorControlled = () => {
  // ** State
  const [value, setValue] = useState(EditorState.createEmpty());

  return <ReactDraftWysiwyg editorState={value} onEditorStateChange={(data) => setValue(data)} />;
};

export default EditorControlled;
