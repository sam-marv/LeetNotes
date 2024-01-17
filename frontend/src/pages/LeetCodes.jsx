import { useState } from 'react';
import Paginations from '../components/Paginations';
import SearchBar from '../components/SearchBar';
import './styles/leetcodes.css';

export default function LeetCodes() {
  const [page, setPage] = useState(6);
  const [prev, setPrev] = useState(0);
  const [idx, setIdx] = useState(0);

  const arr = [
    {
      leetcode_id: 1,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 2,
      title: 'twosum',
      difficulty: 'Hard',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 3,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: true,
    },
    {
      leetcode_id: 4,
      title: 'twosum',
      difficulty: 'Medium',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 5,
      title: 'twosum',
      difficulty: 'Medium',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 6,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 7,
      title: 'twosum',
      difficulty: 'Hard',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 8,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: true,
    },
    {
      leetcode_id: 9,
      title: 'twosum',
      difficulty: 'Medium',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 10,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 11,
      title: 'twosum',
      difficulty: 'Hard',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 12,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: true,
    },
    {
      leetcode_id: 13,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 14,
      title: 'twosum',
      difficulty: 'Hard',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 15,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: true,
    },
    {
      leetcode_id: 16,
      title: 'twosum',
      difficulty: 'Medium',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 17,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 18,
      title: 'twosum',
      difficulty: 'Hard',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 19,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: true,
    },
    {
      leetcode_id: 20,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 21,
      title: 'twosum',
      difficulty: 'Hard',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 22,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: true,
    },
    {
      leetcode_id: 23,
      title: 'twosum',
      difficulty: 'Medium',
      acrate: '45%',
      ispaid: false,
    },
    {
      leetcode_id: 24,
      title: 'twosum',
      difficulty: 'Easy',
      acrate: '45%',
      ispaid: false,
    },
  ];

  const handlePag = (event, value) => {
    // setIdx(value);

    // if (value > idx) {
    //   setPrev(page);
    //   setPage(page + 6);
    // } else {
    //   setPrev(page - 12);
    //   setPage(page - 6);
    // }
    // setPrev(6 * value - 1 + 1);
    setPrev((value - 1) * 6);
    setPage(value * 6);
  };

  return (
    <>
      <section className="header">
        <h1>Leet Code Problems</h1>
        <p>Search for your LeetCode Here</p>
        <SearchBar />
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
          {arr.slice(prev, page).map((lc) => (
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
