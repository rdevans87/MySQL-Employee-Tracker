-- DROPS DATABASE IF employeeTracker_db ALREADY EXISTS --
DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeerTracker_db;

-- DATABASE SCHEMA CONTAINING THREE TABLES --

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
  

);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT
    -- to hold role title --
    title VARCHAR(30) NOT NULL,
    -- to hold role salary --
    salary DECIMAL NOT NULL,
    -- to hold reference to department role belongs to --
    department_id FOREIGN KEY REFERENCES department(id) 
    PRIMARY KEY (id)


);

CREATE TABLE employee (

  id INT PRIMARY KEY AUTO_INCREMENT
  first_name VARCHAR(30) to hold employee first name
  last_name VARCHAR(30) to hold employee last name
  role_id INT to hold reference to role employee has
  manager_id INT to hold reference to another employee 
  that manages the employee being Created. This field may be 
  null if the employee has no manager


);
