
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>{
        tbl.increments();
        tbl.integer('VIN').unique().notNullable();
        tbl.varchar('make',128).notNullable();
        tbl.varchar('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.varchar('title',128);
        tbl.varchar('transmission',128);
    });  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
