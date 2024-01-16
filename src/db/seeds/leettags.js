/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const tags = [
  { leettag_id: 1, name: 'Array' },
  { leettag_id: 2, name: 'Hash Table' },
  { leettag_id: 3, name: 'Linked List' },
  { leettag_id: 4, name: 'Math' },
  { leettag_id: 5, name: 'Recursion' },
  { leettag_id: 6, name: 'String' },
  { leettag_id: 7, name: 'Sliding Window' },
  { leettag_id: 8, name: 'Binary Search' },
  { leettag_id: 9, name: 'Divide and Conquer' },
  { leettag_id: 10, name: 'Dynamic Programming' },
  { leettag_id: 11, name: 'Two Pointers' },
  { leettag_id: 12, name: 'Greedy' },
  { leettag_id: 13, name: 'Trie' },
  { leettag_id: 14, name: 'Sorting' },
  { leettag_id: 15, name: 'Backtracking' },
  { leettag_id: 16, name: 'Stack' },
  { leettag_id: 17, name: 'Heap (Priority Queue)' },
  { leettag_id: 18, name: 'Merge Sort' },
  { leettag_id: 19, name: 'String Matching' },
  { leettag_id: 20, name: 'Bit Manipulation' },
  { leettag_id: 21, name: 'Matrix' },
  { leettag_id: 22, name: 'Monotonic Stack' },
  { leettag_id: 23, name: 'Simulation' },
  { leettag_id: 24, name: 'Combinatorics' },
  { leettag_id: 25, name: 'Memoization' },
  { leettag_id: 26, name: 'Tree' },
  { leettag_id: 27, name: 'Depth-First Search' },
  { leettag_id: 28, name: 'Binary Tree' },
  { leettag_id: 29, name: 'Binary Search Tree' },
  { leettag_id: 30, name: 'Breadth-First Search' },
  { leettag_id: 31, name: 'Union Find' },
  { leettag_id: 32, name: 'Graph' },
  { leettag_id: 33, name: 'Design' },
  { leettag_id: 34, name: 'Doubly-Linked List' },
  { leettag_id: 35, name: 'Geometry' },
  { leettag_id: 36, name: 'Interactive' },
  { leettag_id: 37, name: 'Bucket Sort' },
  { leettag_id: 38, name: 'Radix Sort' },
  { leettag_id: 39, name: 'Counting' },
  { leettag_id: 40, name: 'Data Stream' },
  { leettag_id: 41, name: 'Iterator' },
  { leettag_id: 42, name: 'Database' },
  { leettag_id: 43, name: 'Rolling Hash' },
  { leettag_id: 44, name: 'Hash Function' },
  { leettag_id: 45, name: 'Shell' },
  { leettag_id: 46, name: 'Enumeration' },
  { leettag_id: 47, name: 'Number Theory' },
  { leettag_id: 48, name: 'Topological Sort' },
  { leettag_id: 49, name: 'Prefix Sum' },
  { leettag_id: 50, name: 'Quickselect' },
  { leettag_id: 51, name: 'Binary Indexed Tree' },
  { leettag_id: 52, name: 'Segment Tree' },
  { leettag_id: 53, name: 'Line Sweep' },
  { leettag_id: 54, name: 'Ordered Set' },
  { leettag_id: 55, name: 'Queue' },
  { leettag_id: 56, name: 'Monotonic Queue' },
  { leettag_id: 57, name: 'Counting Sort' },
  { leettag_id: 58, name: 'Brainteaser' },
  { leettag_id: 59, name: 'Game Theory' },
  { leettag_id: 60, name: 'Eulerian Circuit' },
  { leettag_id: 61, name: 'Randomized' },
  { leettag_id: 62, name: 'Reservoir Sampling' },
  { leettag_id: 63, name: 'Shortest Path' },
  { leettag_id: 64, name: 'Bitmask' },
  { leettag_id: 65, name: 'Rejection Sampling' },
  { leettag_id: 66, name: 'Probability and Statistics' },
  { leettag_id: 67, name: 'Suffix Array' },
  { leettag_id: 68, name: 'Concurrency' },
  { leettag_id: 69, name: 'Minimum Spanning Tree' },
  { leettag_id: 70, name: 'Biconnected Component' },
  { leettag_id: 71, name: 'Strongly Connected Component' },
  { leettag_id: 72, name: 'Sort' }
]
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("leettags")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("leettags").insert(tags);
    });
};
