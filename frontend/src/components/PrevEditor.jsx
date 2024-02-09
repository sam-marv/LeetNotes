import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Checklist from '@editorjs/checklist';
import { savePage } from '../adapters/page-adapter';

const PrevEditor = (props) => {
  const { data, userid, id } = props;
  const beenid = id;
  const ejInstance = useRef();
  const [initialData, setInitialData] = useState(null);
  const [editorOpen, setEditorOpen] = useState(true);

  const putPage = async (data, userid, id) => {
    console.log(data);
    // console.log(beenid)
    setEditorOpen(true);

    try {
      console.log('OK');

      const editor = new EditorJS({
        holder: 'PrevEditorjs',
        onReady: () => {
          ejInstance.current = editor;
        },

        onChange: async () => {
          let content = await editor.saver.save();
          console.log(content);
          savePage(content, beenid, userid);
        },
        tools: {
          header: Header,
          list: List,
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              withHeadings: true,
              rows: 2,
              cols: 2,
            },
          },
          checklist: Checklist,
        },

        data: {
          time: new Date().getTime(),
          blocks: data.content.blocks,
        },
      });
    } catch (error) {
      console.error('Error making editor: ', error);
    }
  };

  useEffect(() => {
    if (!ejInstance.current) {
      // console.log("booingjhgtjht")
      putPage(data, userid, id);
    }
    // else {
    //     ejInstance?.current?.destroy();
    //     ejInstance.current = null;
    // }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [data]);
  const destroyEditor = () => {
    if (ejInstance.current) {
      ejInstance.current.destroy();
      ejInstance.current = null;
      setEditorOpen(false);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {editorOpen && (
          <h2 className="X" onClick={destroyEditor}>
            X
          </h2>
        )}
        <div id="PrevEditorjs"></div>
      </div>
    </div>
  );
};

export default PrevEditor;
