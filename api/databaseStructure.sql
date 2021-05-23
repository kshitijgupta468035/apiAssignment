
CREATE DATABASE firstapi;

select * from users;

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT,
    age INTEGER,
    salary INTEGER,
    department VARCHAR(40)
);

INSERT INTO employee (name, email, age, salary, department) 
    VALUES ('Kumar', 'kumar@gmail.com', 25, 50000, 'Education'), 
    ('Prem', 'prem@gmail.com', 26, 45000, 'Marketing');

select * from employee;


CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    employees INTEGER
);

INSERT INTO department (name, employees) 
    VALUES ('Education', 25), 
    ('Marketing', 30);

select * from department;


