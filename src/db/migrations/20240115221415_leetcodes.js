/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable('leetcodes', (table) => {
    table.integer('leetcode_id').primary().unique();
    table.string('title').notNullable();
    table.string('difficulty').notNullable();
    table.decimal('acrate', 4, 2).notNullable();
    table.boolean('ispaidonly').notNullable();
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('leetcodes');
