DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

-- DATABASE SCHEMA CONTAINING THREE TABLES --

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    
    name VARCHAR(30) NOT NULL,
    
    PRIMARY KEY (id)
  

);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    -- to hold role title --
    title VARCHAR(30) NOT NULL,
    -- to hold role salary --
    salary DECIMAL NOT NULL,
    -- to hold reference to department role belongs to --
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)


);

CREATE TABLE employee (

  id INT NOT NULL AUTO_INCREMENT,
  -- to hold employee first name --
  first_name VARCHAR(30) NOT NULL,
  -- to hold employee last name --
  last_name VARCHAR(30) NOT NULL,
  --  to hold reference to role employee has --
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  -- to hold reference to another employee --
  manager_id INT NOT NULL, 
   -- alt FOREIGN KEY (role_id) REFERENCES role(id) -- 
  FOREIGN KEY (manager_id) REFERENCES role(id),
  PRIMARY KEY (id)


);
