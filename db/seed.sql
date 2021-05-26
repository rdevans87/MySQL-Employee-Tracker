USE employeeTracker_db;

INSERT INTO department
(name)

VALUES
('Sales'),
('Support'),
('Marketing'),
('Development');

INSERT INTO role 
(title, salary, department_id)

VALUES
('Sales Manager', 60000, 1),
('Sales Associate', 40000, 1),
('Support Manager', 65000, 2),
('Support Associate', 6500, 2),
('Marketing Manager', 70000, 3),
('Marketing Associate', 50000, 3),
('Development Manager', 100000, 4),
('Development Associate', 80000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)

VALUES
('Mike', 'Miller', 1, 2),
('John', 'Winters', 2, 1),
('Lisa', 'Wright', 3, 4),
('Steve', 'Streets', 4, 3),
('Chris', 'Maple', 5, 6),
('Heather', 'Williams', 6, 5),
('Julie', 'Adams', 7, 8),
('Dan', 'Klein', 8, 7);