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

// connection.connect((err) => {
//     if (err) throw err;
    
//     console.log(chalk.yellow.bold('==========================================================================='));
//     console.log(``);
//     console.log(chalk.red.bold(figlet.textSync('Employee Tracker')));
//     console.log(``);
//     console.log(`                                                                    ` + chalk.green.bold('Created By: Ryan Evans'));                                                     
//     console.log(``);
//     console.log(chalk.yello.bold(`==============================================================================`));
//     promptUser();
// });


const promptUser = () => {
inquirer.prompt([

    { name: 'choices',
      type: 'list',  
      choices: [











        
      ]
    
    





module.exports = connection;