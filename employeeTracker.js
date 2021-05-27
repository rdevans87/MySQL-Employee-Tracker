// connect to db to perform quieries
const mysql = require("mysql");
//calling database
const employeeTracker = require("./employeeTracker");
// interact with user via the command line
const inquirer = require("inquirer");
// dotenv for environmental variables
require("dotenv").config();
// print MySQL rows to the console.
require("console.table");

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






//     start();
// });

// connection.connect();




module.exports = connection;