// connect to db to perform quieries
const mysql = require('mysql2');
// //calling database
// const connection = require('./employeeTracker');
// interact with user via the command line
const inquirer = require('inquirer');
// terminal string styling
const chalk = require('chalk');
// implement FIGfont spec in Javascript
const figlet = require('figlet');
const { ConsoleWriter } = require('istanbul-lib-report');
const { connect } = require('http2');
// dotenv for environmental variables
require('dotenv').config();
// print MySQL rows to the console.
require('console.table');

// const validator = require('validator')
const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employeetracker_db'       
});

connection.connect();

init();

function init() {
    
    console.log(chalk.yellow.bold('======================================================================================================='));
    console.log(``);
    console.log(chalk.red.bold(figlet.textSync('EMPLOYEE TRACKER')));
    console.log(``);
    console.log(`                               ` + chalk.green.bold('(C)ONTENT (M)ANAGEMENT (S)YSTEM'));                                                     
    console.log(``);
    console.log(chalk.yellow.bold(`======================================================================================================`));


    printMainMenu();


}



const printMenuPrompts = () => {
    
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
        },
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
    printMenuPrompts();
}

const viewAllRoles = () => {
    const query = 'SELECT * FROM role_table';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    printMenuPrompts();
}

const viewAllDepartments = () => {
    const query = 'SELECT * FROM department_table';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    printMenuPrompts();
}

// BONUS: SQL GROUP BY statement to view employees by manager
const viewEmployeesByManager = () => {
    const query = 'SELECT * FROM employee_table GROUP BY department_id ORDER BY manager_id';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    
    printMenuPrompts();
}

const updateEmployeeRole = () => {
    connection.query('SELECT * FROM role', (err, employees) => {
        if (err) console.log(err);
        employees = employees.map((employee) => {
            return {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            };
        });
        connection.query('SELECT * FROM role', (err, roles) => {
            if (err) console.log(err);
            roles = roles.map((role) => {
                return {
                    name: role.title,
                    value: role.id,
                }
            });
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'selectEmployee',
                    message: 'Select employee to update...',
                    choices: employees,
                },
                {
                    type: 'list',
                    name: 'selectNewRole',
                    message: 'Select new employee role...',
                    choices: 'roles',
                },
            ])
                .then((data) => {
                    connection.query(
                        'UPDATE employee SET ? WHERE?',
                        [
                            {
                                role_id: data.selectNewRole,
                            },
                            {
                                id: data.selectEmployee,
                            },
                        ],
                        function (err) {
                            if (err) throw err;
                        }
                    );
                    console.log('Employee role updated');
                    viewAllRoles();
                });

        });
    });
};

const addNewEmployee = () => {
    connection.query('SELECT * FROM role', (err, roles) => {
        if (err) console.log(err);
        roles = roles.map((role) => {
            return {
                name: role.title,
                value: role.id,
            };
        });
        inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter first name of new employee...'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter last name of new employee...'
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter new employee role...',
                choices: roles,
            },
        ])
            .then((data) => {
                console.log(data.role);
                connection.query('INSERT INTO employee SET ?',
                    {
                        first_name: data.firstName,
                        last_name: data.lastName,
                        role_id: data.role,
                    },
                    (err) => {
                        if (err) throw err;
                        console.log('Updated Employee List:');
                        viewAllEmployees();

                    }
                );
            });

    });

}

const addNewRole = () => {
    connection.query('SELECT * FROM department', (err, departments) => {
        if (err) console.log(err);
        departments = departments.map((department) => {
            return {
                name: department.name,
                value: department.id,
            };
        });
        inquirer.prompt([
            {
                type: 'input',
                name: 'newRole',
                message: 'Enter title of new role.'
            },
            {
                type: 'input',
                name: 'newsalary',
                message: 'Enter salary of new role.',
            },
            {
                type: 'list',
                name: 'departmentId',
                message: 'Enter department of new role.',
                choices: departments,
            },
        ])
            .then((data) => {
                connection.query('INSERT INTO role SET ?',
                    {
                        title: data.newRole,
                        salary: data.newSalary,
                        department_id: data.departmentId,
                    },
                    function (err) {
                        if (err) throw err;
                    }
                );
                console.log('New role added to database')
                viewAllRoles();
            });

    });

};

const addNewDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'Enter new department name...'
        },
    ])
        .then((data) => {
            connection.query('INSERT INTO department SET ?',
                {
                    name: data.newDepartment,
                },
                function (err) {
                    if (err) throw err;
                }
            );
            console.log('New department added to database')
            viewAllDepartments();
        });
};

module.exports = connection;





// ## Bonus

// * The command-line application should allow users to:
//   * Update employee managers
//   * View employees by manager
//   * Delete departments, roles, and employees
//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department