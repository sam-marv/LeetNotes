const knex = require('../knex');

class Leetcode {
  static async get50(offset) {
    const query = 'SELECT * FROM leetcodes LIMIT 50 OFFSET ?';
    const args = [offset]
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }



 
}

module.exports = Leetcode;