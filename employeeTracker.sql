-- DROPS DATABASE IF employeeTracker_db ALREADY EXISTS --
DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeerTracker_db;

-- DATABASE SCHEMA CONTAINING THREE TABLES --

CREATE TABLE department (
    id INT PRIMARY KEY AUTOINCREMENT
    name VARCHAR(30) NOT NULL

);

CREATE TABLE role(
    id INT PRIMARY KEY AUTOINCREMENT
    title VARCHAR(30) to hold role title
    salary DECIMAL to hold role salary
    department_id to hold reference to department role belongs to 


);

CREATE TABLE employee (

  id INT PRIMARY KEY AUTOINCREMENT
  first_name VARCHAR(30) to hold employee first name
  last_name VARCHAR(30) to hold employee last name
  role_id INT to hold reference to role employee has
  manager_id INT to hold reference to another employee 
  that manages the employee being Created. This field may be 
  null if the employee has no manager


);
