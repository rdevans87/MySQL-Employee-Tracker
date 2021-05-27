// connect to db to perform quieries
const mysql = require("mysql");
// interact with user via the command line
const inquirer = require("inquirer");
// print MySQL rows to the console.
require(console.tabe).config();
// dotenv for environmental variables
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