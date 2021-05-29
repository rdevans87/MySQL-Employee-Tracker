// connect to db to perform quieries
const mysql = require('mysql');
//calling database
const employeeTracker = require('./employeeTracker');
// interact with user via the command line
const inquirer = require('inquirer');
// dotenv for environmental variables
require('dotenv').config();
// print MySQL rows to the console.
require('console.table');

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
//     console.log(chalk.red.bold(figlet.textSync('EMPLOYEE TRACKER SYSTEM')));
//     console.log(``);
//     console.log(`                                                                    ` + chalk.green.bold('Created By: Ryan Evans'));                                                     
//     console.log(``);
//     console.log(chalk.yello.bold(`==============================================================================`));
//     menuPrompt();
// });
    menuPrompt();

const menuPrompt = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'PLEASE SELECT A MENU OPTION...',
            choices: [
                'View All Employes',
                'View All Roles',
                'View All Departments',
                'View All Employees By Department',
                'View Department Budgets',
                'Update Employee Role',
                'Update Employee Manager',
                'Add New Employee',
                'Add New Role',
                'Add New Department',
                'Remove Current Employee',
                'Remove Current Role',
                'Remove Current Department',
                'Exit Menu'
            ]
        }
    ])
           .then((answers) => {
            const {choices} = answers;

            if (choices === 'View All Employees') {
                viewAllEmployees();
            }      
            if (choices === 'View All Roles') {
                viewAllRoles();
            }
            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View All Employees by Department') {
                viewAllEmployeesByDepartment();
            }
            if (choices === 'View Department Budgets') {
                viewDepartmentBudgets();
            }
            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }
            if (choices === 'Update Employee Manager') {
                updateEmployeeManager();
            }
            if (choices === 'Add New Employee') {
                addNewEmployee();
            }
            if (choices === 'Add New Role') {
                addNewRole();
            }
            if (choices === 'Add New Department') {
                addNewDepartment();
            }
            if (choices === 'Remove Employee') {
                removeCurrentEmployee();
            }
            if (choices === 'Remove Role') {
                removeCurrentRole();
            }
            if (choices === 'Remove Department') {
                removeCurrentDepartment();
            }
            if (choices === 'Exit') {
                connection.end();
            }

        });
       
};


//SQL SELECT * FROM statement for choices
const viewAllEmployees = () => {
    const query =  'SELECT * FROM employee_table';
    connection.query(query, (err,res) => {
    if (err){ res.json(err) }; 
    console.table(res);
    })
    menuPrompt();
}

const viewAllRoles = () => {

}

const viewAllDepartments = () => {

}

const viewAllEmployeesByDepartment = () => {

}

const viewDepartmentBudgets = () => {

}

const updateEmployeeRole = () => {

}

const updateEmployeeManager = () => {

}

const addNewEmployee = () => {

}

const addNewRole = () => {

} 

const addNewDepartment = () => {

}
const removeCurrentEmployee = () => {

}

const removeCurrentRole = () => {

} 
const removeCurrentDepartment = () => {

}








module.exports = connection;