const Sequelize = require('sequelize');
const database = require('../database/connectionBd')

const HinoNovo = database.define('hino_novo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.TEXT
    },
    text: {
        type: Sequelize.TEXT
    }
})

module.exports = HinoNovo;