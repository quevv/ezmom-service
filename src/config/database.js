const { Sequelize } = require('sequelize');
require('dotenv').config();

const isDevelopment = process.env.NODE_ENV === 'development';

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
        max: parseInt(process.env.DB_MAX, 10),
        idle: parseInt(process.env.DB_IDLE_TIMEOUT, 10),
        acquire: parseInt(process.env.DB_CONNECTION_TIMEOUT, 10)
    },
    logging: false
});

module.exports = sequelize;
