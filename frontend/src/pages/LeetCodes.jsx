import { useState, useEffect, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Paginations from '../components/Paginations';
import SearchBar from '../components/SearchBar';
import { getLeetcodes } from '../adapters/leetcode-adapter';
import './styles/leetcodes.css';
import { createPage, getAPage, getAllPages } from '../adapters/page-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import PrevEditor from '../components/PrevEditor';
import Alert from '@mui/joy/Alert';

export default function LeetCodes() {
  const { currentUser } = useContext(CurrentUserContext);

  const [allLeetcodes, setAllLeetcodes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(6);
  const [prev, setPrev] = useState(0);
  const [added, setAdded] = useState('');
  const [idx, setIdx] = useState(0);
  const [selectedNote, setSelectedNote] = useState(null);
  const [createdNotes, setCreatedNotes]  = useState({})
  const [query, setQuery] = useState({
    offset: 0,
    difficulty: null,
    tag: null,
  });

  useEffect(() => {
    const setCodes = async () => {
      const bar = await getLeetcodes({
        offset: 0,
        difficulty: null,
        tag: null,
      });
      setAllLeetcodes(bar);

      if (searchValue !== '') {
        const filterItems = bar.filter((lc) =>
          lc.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setAllLeetcodes(filterItems);
      } else {
        setPrev(0);
        setPage(6);
      }
    };
    setCodes();
  }, [searchValue]);
  useEffect((() => {

  }), [])

  useEffect(() => {
    const setNotes = async () => {
      try {
        console.log(currentUser)
        const prevNotes = await getAllPages(currentUser.id);
        let obj = {}
        prevNotes.forEach((note) => {
          obj[note.title] = note.page_id
        })
        setCreatedNotes(obj)
        console.log(prevNotes)
        console.log(obj);
      } catch(error){
        console.log(error)
      }


    };
    setNotes();
  }, [currentUser]);
  const handlePag = (event, value) => {
    setPrev((value - 1) * 6);
    setPage(value * 6);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const shortener = (title) => {
    if (title.length > 20) {
      const val = `${title.slice(0, 20)}....`;
      return val;
    }
    return title;
  };

  const createSection =  async (lc) => {
    if(!(lc.title in createdNotes)){
    const testresult = await createPage({ title: lc.title, content: lc, user_id: currentUser.id });
    console.log(testresult)
    if(testresult[0] === null) console.log("rip")
    if(Array.isArray(testresult[0])) {
      console.log("its an array")
      setSelectedNote(testresult[0][0])
    
    }
    if(typeof testresult[0] === "number"){
      console.log("cool its a num: " + testresult[0])

      const obj = {
        CreatedAt: new Date().toISOString(),
        UpdatedAt: new Date().toISOString(),
        content: {
          time : new Date().getTime(),
          blocks : [],
          version: "2.28.2"
        },
        page_id: testresult[0],
        title: lc.title,
        user_id: currentUser.id
     }
     setSelectedNote(obj)
     setCreatedNotes({...createdNotes, [lc.title]: testresult[0]})
    }
    setAdded('Successfully Added');
    setTimeout(() => {
      setAdded('');
    }, 2500);}
    else {
      const leetpage = await getAPage(createdNotes[lc.title])
      console.log(leetpage)
      setSelectedNote(leetpage[0])
    }
  };

  return (
    <>
      <section className="header">
        <h1>Leet Code Problems</h1>
        <h3>Search for your LeetCode Here</h3>
        <SearchBar changeHandler={searchHandler} />
      </section>
      <section className="container">
        <ul>
          <li className="none">
            <p>Save</p>
            <p>Title</p>
            <p>Difficulty</p>
            <p>Acceptance Rate</p>
            <p>Subscription Tier</p>
          </li>
          <div className="line"></div>
          {!!added && (
            <Alert variant="solid" color="success">
              {added}
            </Alert>
          )}
          {allLeetcodes.slice(prev, page).map((lc) => (
            <li
              className={lc.leetcode_id % 2 === 1 ? 'grey' : 'dark'}
              key={lc.leetcode_id}
            >
              <button
                className="add"
                onClick={() => {
                  createSection(lc);
                }}
              >
                <AddIcon />
              </button>
              <p className="item sm">
                {lc.leetcode_id}. {shortener(lc.title)}
              </p>
              <p className={`${lc.difficulty} + item`}>{lc.difficulty}</p>
              <p className="item">{lc.acrate}</p>
              <p className="item">{lc.ispaid ? 'Premium' : 'Free'}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="pag">
        <Paginations handleChange={handlePag} />
      </section>
      {selectedNote && (
        <PrevEditor id={selectedNote.page_id} data={selectedNote} userid={currentUser.id} />
      )}
    </>
  );
}
