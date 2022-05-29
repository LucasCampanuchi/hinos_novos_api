const { Sequelize } = require('sequelize');
const pg = require('pg');
pg.defaults.ssl = true;

/* const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/db.sqlite'
}); */

const sequelize = new Sequelize({
    database: process.env.DB_NAME ?? 'hinos',
    username: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASSWORD ?? '1234',
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });

module.exports = sequelize

