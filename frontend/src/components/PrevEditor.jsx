import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
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
    setEditorOpen(true)

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

  //   const savePage = async (content) => {
  //     console.log(pageId.current);
  //     ;
  //     try {
  //       const response = await fetch(`http://localhost:3000/api/pages`, {
  //         method: 'PATCH',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({  content, page_id: (pageId.current || 4), user_id: 3 }),
  //       });

  //       const data = await response.json();
  //       console.log(pageId.current);
  //       console.log('Page saved:', data);
  //     } catch (error) {
  //       console.error('Error saving page:', error);
  //     }
  //   };



  useEffect(() => {
    if (!ejInstance.current) {
        console.log("booingjhgtjht")
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
        {editorOpen && <h2 className="X" onClick={destroyEditor}>X</h2>}
        <div id='PrevEditorjs'></div>
    </div>
</div>);
};

export default PrevEditor;
