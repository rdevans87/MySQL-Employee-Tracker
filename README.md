# MySQL_EmployeeTracker

## Description

Unit 12 MySQL Homework: Employee Tracker

This application is a backend solution for managing a company's employees using `node.js`, `inquirer`, and `MySQL`. The interface functions as a **C**ontent **M**anagement **S**ystem for non-developers to easily view and interact with information stored in the database from the terminal. 

## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

Example database schema containing three tables:

![Database Schema](Assets/schema.png)



* You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a `constructor function` or a class be helpful for organizing these?

* You will need to perform a variety of `SQL JOINS` to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

![Employee Tracker]()

INSTALLATION 

Open `terminal` window after fork.
`npm init -y` to create a package.son file to store your dependenices.
`npm i` to install your NPM package manager and required dependencies.
`npm i inquirer` to interact with the user via the command-line.
`npm i console.table` to print MySQL rows to the console.
`npm i dotenv` to store environmental variables.
`npm i mysql` to connect to your MySQL database and perform queries.
run command `mysql -u -root -p` to initilize MySQL, then type `username` and `password` to login:

```
Test User
username: root
password: test123

 ```
`Welcome to the MySQL monitor`, next type `mysql> status` to request status information from the server or `help` for more options.
confirm connection with database and server, then `quit` mysql. 
run command `node employeeTracker`, then `npm start` to answer the prompts.


## Acceptance Criteria

* Functional application.
* GitHub repository with a unique name and a README describing the project.
* The command-line application should allow users to:
  * Add departments, roles, employees
  * View departments, roles, employees
  * Update employee roles

## Bonus

* The command-line application should allow users to:
  * Update employee managers
  * View employees by manager
  * Delete departments, roles, and employees
  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department


## Submitted for review:

* The URL of the GitHub repository
* A video demonstrating the entirety of the app's functionality 





[MIT LICENSE](LICENSE)