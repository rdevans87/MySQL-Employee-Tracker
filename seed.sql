USE employeeTracker_db;

INSERT INTO department,
name,

VALUES
('Sales'),
('Support'),
('Marketing'),
('Development');

INSERT INTO role 
title, salary, department_id

VALUES
('Sales Manager', 60000, 1),
('Sales Associate', 40000, 1),
('Support Manager', 65000, 2),
('Support Associate', 6500, 2),
('Marketing Manager', 70000, 3),
('Marketing Associate', 50000, 3),
('Development Manager', 100000, 4),
('Development Associate', 80000, 4);

INSERT INTO
first_name, last_name, role_id, manager_id

VALUES
('Mike', 'Miller', 1, 2),
('John', 'Winters', 2, NULL),
('Mike', 'Miller', 3, 4 ),
('Mike', 'Miller', 4, NULL),
('Mike', 'Miller', 5, 6),
('Mike', 'Miller', 6, NULL),
('Mike', 'Miller', 7, 8),
('Mike', 'Miller', 8, NULL);