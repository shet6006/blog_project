// src/components/CKEditorComponent.js
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = ({ data, onChange }) => {
  return (
    <div className="ckeditor-container">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const editorData = editor.getData();
          if (onChange) {
            onChange(editorData);
          }
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
