import { useState, useEffect } from 'react';
import { getLeetcodes } from '../adapters/leetcode-adapter';
import Paginations from '../components/Paginations';
import SearchBar from '../components/SearchBar';
import './styles/leetcodes.css';

export default function LeetCodes() {
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
              <p>{lc.leetcode_id}</p>
              <p>{lc.title}</p>
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
