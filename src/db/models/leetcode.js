const knex = require('../knex');

class Leetcode {
  static async get50(offset, difficulty = null, tag = null) {
  // Base query
  let query = `
    SELECT leetcodes.*, STRING_AGG(leettags.name, ',') as tagNames
    FROM leetcodes
    LEFT JOIN leettagleetcode ON leetcodes.leetcode_id = leettagleetcode.leetcode_id
    LEFT JOIN leettags ON leettagleetcode.leettag_id = leettags.leettag_id
  `;

  // Conditionally add WHERE clause based on the presence of optional parameters
  const conditions = [];
  const args = [];

  if (difficulty !== null) {
    conditions.push('leetcodes.difficulty = ?');
    args.push(difficulty);
  }

  if (tag !== null) {
    conditions.push('leettags.name = ?');
    args.push(tag);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  // Im def adding more comments tommorow this was a bitch, gn
  query += ' GROUP BY leetcodes.leetcode_id';

  // Add LIMIT and OFFSET to the query
  query += ' LIMIT 50 OFFSET ?';
  args.push(offset);

  const { rows } = await knex.raw(query, args);
  return rows || [];
  }



 
}

module.exports = Leetcode;