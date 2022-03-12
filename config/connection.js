const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // : new Sequelize("tinas_tech_blog_db", "root", "Password!1", {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;