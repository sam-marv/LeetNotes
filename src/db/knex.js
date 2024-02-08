require('dotenv').config();

const env = process.env.NODE_ENV || 'production';
const config = require('../../knexfile')[env];
module.exports = require('knex')(config);
