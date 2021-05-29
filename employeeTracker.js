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
   connection.query('SELECT * FROM department', (err, department) => {
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
        name: 'salary',
        message: 'Enter salary of new role.'
        },
        {
        type: 'list',
        name: 'department',
        message: 'Enter department of new role.',
        choices: departments,
        },
    ])
    .then((data) => {
     connection.query('INSERT INTO role SET ?',
     {
      title: data.newRole,
      salary: data.newSalary,
      department_id: data.department.id,
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




    ])

}
const deleteCurrentEmployee = () => {

}

const deleteCurrentRole = () => {

}
const deleteCurrentDepartment = () => {

}











module.exports = connection;

