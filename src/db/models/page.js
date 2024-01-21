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
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }
  static async getPageByTitle(title, user_id) {
    try {
    const query = 'SELECT * FROM pages WHERE title = ? AND user_id = ?;';
    const args = [title, user_id];
    const { rows } = await knex.raw(query, args);
    return rows || [];
    }
    catch(err) {
      console.error(err);
      return null;
    }
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
      
    } catch (err) {
      if (err.code === '23505' && err.constraint === 'pages_title_unique') {
        // Handle the unique constraint violation 
        console.error('Duplicate title. Please choose a different title.');
        return Page.getPageByTitle(title, user_id)
        return null;
      } else {
        
        console.error(err);
        return null;
      }
    }
  }
  static async getPageByTitle(title, user_id) {
    try {
    const query = 'SELECT * FROM pages WHERE title = ? AND user_id = ?;';
    const args = [title, user_id];
    const { rows } = await knex.raw(query, args);
    console.log(rows)
    return rows || [];
    }
    catch(err) {
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
