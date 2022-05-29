const { Sequelize } = require('sequelize');

/* const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/db.sqlite'
}); */

const sequelize = new Sequelize(
    `postgres://${(process.env.DB_USER ?? 'postgres')}@${(process.env.DB_HOST ?? 'localhost')}:${(process.env.DB_PORT ?? '5432')}/${(process.env.DB_NAME ?? 'hinos')}`, 
    {
        dialect: 'postgres',
        password: process.env.DB_PASSWORD ?? '1234'
    }
);

module.exports = sequelize

