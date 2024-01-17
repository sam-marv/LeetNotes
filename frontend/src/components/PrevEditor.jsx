import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { savePage } from "../adapters/page-adapter";

const PrevEditor = (props) => {
    const {data, userid, id} = props
    const beenid = id
  const ejInstance = useRef();
  const [initialData, setInitialData] = useState(null);
  const [pageId, setPageId] = useState(id); 

  const putPage = async (data, userid, id) => {
    console.log(data)
    console.log(beenid)
    setPageId(id)
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
          savePage(content,beenid, userid);
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
      putPage(data, userid, id);
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (!ejInstance.current) {
        setPageId(id)
      putPage(data, userid, id);
    }else {
        ejInstance?.current?.destroy();
        ejInstance.current = null;
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
      
    };
  }, [data]);

  return <div id='PrevEditorjs'></div>;
};

export default PrevEditor;