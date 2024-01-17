import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { savePage } from "../adapters/page-adapter";

const PrevEditor = (props) => {
    const {data, userid, id} = props
  const ejInstance = useRef();
  const [initialData, setInitialData] = useState(null);
  const pageId = useRef(id); 

  const putPage = async (data, userid, id) => {
    console.log(data)
    try {
        console.log("ok")
        
      const editor = new EditorJS({
        holder: "PrevEditorjs",
        onReady: () => {
          ejInstance.current = editor;
        },
        
        onChange: async () => {
          let content = await editor.saver.save();
          console.log(content);
          savePage(pageId,content, (userid || id));
        },
        tools: {
          header: Header,
          list: List,
        },
   
        data: {
            time: new Date().getTime(),
            blocks: data.content.blocks
        },
      });
    } catch (error) {
      console.error('Error fetching blocks:', error);
    }
  };

//   const savePage = async (content) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/pages`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ page_id: pageId, content, user_id : userid }),
//       });

//       const data = await response.json();
//       console.log('Page saved:', data);
//     } catch (error) {
//       console.error('Error saving page:', error);
//     }
//   };

  useEffect(() => {
    if (!ejInstance.current) {
      putPage(data, userid, id);
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <div id='PrevEditorjs'></div>;
};

export default PrevEditor;