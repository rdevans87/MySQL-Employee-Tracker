const mysql = require("mysql");
const inquirer = require("inquirer");
// const inquirer = require('inquirer')

require('dotenv').config();

const connection = mysql.createConnection(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }

);

connection.connect((err) => {
    if (err) throw err;
    start();
});


module.exports = connection;