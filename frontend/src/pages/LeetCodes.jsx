import SearchBar from '../components/SearchBar';
import './styles/leetcodes.css';

export default function LeetCodes() {
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
  ];

  return (
    <>
      <section className="header">
        <h1>Leet Code Problems</h1>
        <p>Search for your LeetCode Here</p>
        <SearchBar />
      </section>
      <section className="container">
        <ul>
          <li className="none">
            <p>LeetCode #</p>
            <p>Title</p>
            <p>Difficulty</p>
            <p>Acceptance Rate</p>
            <p>Subscription Tier</p>
          </li>
          {arr.map((lc) => (
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
    </>
  );
}
