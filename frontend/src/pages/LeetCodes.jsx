import { useState, useEffect, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Paginations from '../components/Paginations';
import SearchBar from '../components/SearchBar';
import { getLeetcodes } from '../adapters/leetcode-adapter';
import './styles/leetcodes.css';
import { createPage } from '../adapters/page-adapter';
import CurrentUserContext from '../contexts/current-user-context';

export default function LeetCodes() {
  const { currentUser } = useContext(CurrentUserContext);

  const [allLeetcodes, setAllLeetcodes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(6);
  const [prev, setPrev] = useState(0);
  const [idx, setIdx] = useState(0);
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

  // { title, content, user_id }

  const createSection = (lc) => {
    createPage({ title: lc.title, content: lc, user_id: currentUser.id });
  };

  return (
    <>
      <section className="header">
        <h1>Leet Code Problems</h1>
        <p>Search for your LeetCode Here</p>
        <SearchBar changeHandler={searchHandler} />
      </section>
      <section className="container">
        {page}
        <ul>
          <li className="none">
            <p>LeetCode #</p>
            <p>Title</p>
            <p>Difficulty</p>
            <p>Acceptance Rate</p>
            <p>Subscription Tier</p>
          </li>
          {allLeetcodes.slice(prev, page).map((lc) => (
            <li
              className={lc.leetcode_id % 2 === 1 ? 'grey' : 'dark'}
              key={lc.leetcode_id}
            >
              <button
                onClick={() => {
                  createSection(lc);
                }}
              >
                <AddIcon />
              </button>
              <p>{lc.leetcode_id}</p>
              <p>{shortener(lc.title)}</p>
              <p className={lc.difficulty}>{lc.difficulty}</p>
              <p>{lc.acrate}</p>
              <p>{lc.ispaid ? 'Premium' : 'Free'}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="pag">
        <Paginations handleChange={handlePag} />
      </section>
    </>
  );
}
