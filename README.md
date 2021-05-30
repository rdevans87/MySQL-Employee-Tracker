# MySQL-Employee-Tracker

## Description

Unit 12 MySQL Homework: Employee Tracker

This application is a backend solution for managing a company's employees using `node.js`, `inquirer`, and `MySQL`. The interface functions as a **C**ontent **M**anagement **S**ystem for non-developers to easily view and interact with information stored in the database from the terminal. 

[GitHub Repository](https://github.com/rdevans87/MySQL-Employee-Tracker)

[README](/) on GitHub Pages.
## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

Example database schema containing three tables:

<img src="Assets/schema.png" width="500px"/>


Walk through video demonstrating applications funcionality: [MySQL Employee Tracker](/) 


## Installation 

Open `terminal` window after fork.
`npm init -y` to create a package.son file to store your dependenices.
`npm i` to install your NPM package manager and required dependencies.
`npm i inquirer` to interact with the user via the command-line.
`npm i figlet` to implement implement FIGfont spec in Javascript. 
`npm i chalk ` for terminal string styling.
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

## Usage

run command `npm start` 
select an option from the menu prompt 
follow the prompts for each selection.
`Red` menu options are unfinished `Bonus`.
Select `Exit Menu` to quit.


## Acceptance Criteria

* Functional application. <img src="Assets/icons8-checkmark.png"/>
* GitHub repository with a unique name and a README describing the project. <img src="Assets/icons8-checkmark.png"/>
* The command-line application should allow users to:
  * Add departments, roles, employees <img src="Assets/icons8-checkmark.png"/>
  * View departments, roles, employees <img src="Assets/icons8-checkmark.png"/>
  * Update employee roles <img src="Assets/icons8-checkmark.png"/>

## Bonus

* View employees by manager <img src="Assets/icons8-checkmark.png" />
* Update employee managers <img src="Assets/icons8-cross_mark.png" width="20px"/>
* Delete departments, roles, and employees  <img src="Assets/icons8-cross_mark.png" width="20px"/>
* View the total utilized budget of a department -- ie the combined salaries of all employees in that department  <img src="Assets/icons8-cross_mark.png" width="20px"/>

## Submitted for review:

* The URL of the GitHub repository
* A video demonstrating the entirety of the app's functionality 

## Contact 

(Ryan Evans)[https://github.com/rdevans87] Repository

 Email: <a href="mailto:rdevans87@gmail.com">rdevans87@gmail.com</a>

[MIT LICENSE](LICENSE)