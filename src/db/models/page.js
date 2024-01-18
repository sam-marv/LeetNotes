const knex = require('../knex');

class Page {
  static async list(userid) {
    const query = 'SELECT * FROM pages WHERE user_id = ? LIMIT 5';
    const args = [userid];
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }
  static async getPage(page_id) {
    const query = 'SELECT * FROM pages WHERE page_id = ?;';
    const args = [page_id];
<<<<<<< HEAD
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }
  static async getPage(page_id) {
    const query = 'SELECT * FROM pages WHERE page_id = ?;'
    const args = [page_id]
=======
>>>>>>> 0dcfc2f (j)
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }
  static async testlist() {
    const query = 'SELECT * FROM pages';
    const { rows } = await knex.raw(query);
    return rows || [];
  }

  static async create(title, content, user_id) {
    try {
      const query = `INSERT INTO pages (title, content, user_id)
    VALUES (?, ?, ?) RETURNING page_id`;
      const args = [title, content, user_id];
      console.log(args);
      const { rows } = await knex.raw(query, args);
      console.log(rows);
      return rows[0].page_id;
      // return rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async update(content, page_id, user_id) {
    try {
      const query =
        'UPDATE pages SET content = ? WHERE page_id = ? AND user_id = ? RETURNING content';
      const args = [content, page_id, user_id];
      console.log(args);
      const { rows } = await knex.raw(query, args);
      return rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Page;
