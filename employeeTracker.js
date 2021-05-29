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
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'View Employees By Manager',
                'Update Employee Role',
                'Update Employee Manager',
                'Add New Employee',
                'Add New Role',
                'Add New Department',
                'Delete Current Employee',
                'Delete Current Role',
                'Delete Current Department',
                'Exit Menu'
            ]
        }
    ])
        .then((answers) => {
            const { choices } = answers;

            if (choices === 'View All Employees') {
                viewAllEmployees();
            }
            if (choices === 'View All Roles') {
                viewAllRoles();
            }
            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View Employees By Manager') {
                viewEmployeesByManager();
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
            if (choices === 'Delete Employee') {
                deleteCurrentEmployee();
            }
            if (choices === 'Delete Role') {
                deleteCurrentRole();
            }
            if (choices === 'Delete Department') {
                deleteCurrentDepartment();
            }
            if (choices === 'Exit') {
                connection.end();
            }

        });

};

//SQL SELECT * FROM statements for choices
const viewAllEmployees = () => {
    const query = 'SELECT * FROM employee_table';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    menuPrompt();
}

const viewAllRoles = () => {
    const query = 'SELECT * FROM role_table';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    menuPrompt();
}

const viewAllDepartments = () => {
    const query = 'SELECT * FROM department_table';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    menuPrompt();
}

// BONUS: SQL GROUP BY statement to view employees by manager
const viewEmployeesByManager = () => {
    const query = 'SELECT * FROM employee_table GROUP BY department_id ORDER BY manager_id';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    menuPrompt();
}

const updateEmployeeRole = () => {
    connection.query('SELECT * FROM role', (err, roles) => {
        if (err) console.log(err);
        roles = roles.map(role => {
        return {
            name: role.title,
            value: role.id,
        }
    
    )

});


// BONUS: SQL to update employee by manager
const updateEmployeeManager = () => {

}

const addNewEmployee = () => {

}

const addNewRole = () => {

//   inquirer.prompt {

//         type: 'list'
//    eee     name: 'departmen_id'
//         message: ''

//         }

// }

}


const addNewDepartment = () =>eeeeeeeeeeeee {

}
const deleteCurrentEmployee = () => {

}

const deleteCurrentRole = () => {

}
const deleteCurrentDepartment = () => {

}











module.exports = connection;

