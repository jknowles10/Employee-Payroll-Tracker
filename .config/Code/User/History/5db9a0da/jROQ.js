const express = require('express');
const inquirer = require('inquirer');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'employeetracker_db',
        password: 'prince'
        
    },
console.log('Connected to the employeetracker_db database'))
    
pool.connect();

//SET UP QUERIES: 
//View all departments
pool.query('SELECT * FROM departments', function (err, {rows}) {
    console.log(rows);
  });


//View all roles
pool.query('SELECT * FROM roles', function (err, {rows}) {
    console.log(rows);
  });


//View all employees
pool.query('SELECT * FROM employees', function (err, {rows}) {
    console.log(rows);
  });


//Add a department  
app.post('/addDepartment', (req, res) => {
    const { name } = req.body;
    pool.query('INSERT INTO departments (name) VALUES ($1)', [name], (err, result) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error adding department');
        } else {
            res.send(`Department ${name} added successfully`);
        }
    });
});


//Add a role
app.post('/addRole', (req, res) => {
    const { title, salary, department_id } = req.body;
    pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id], (err, result) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error adding role');
        } else {
            res.send(`Role ${title} added successfully`);
        }
    });
});


//Add an employee
app.post('/addEmployee', (req, res) => {
    const { first_name, last_name, role_id, manager_id } = req.body;
    pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id], (err, result) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error adding employee');
        } else {
            res.send(`Employee ${first_name} ${last_name} added successfully`);
        }
    });
});


//Update an employee role
app.put('/updateEmployeeRole', (req, res) => {
    const { employee_id, role_id } = req.body;
    pool.query('UPDATE employees SET role_id=$1 WHERE id=$2', [role_id, employee_id], (err, result) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error updating employee role');
        } else {
            res.send(`Employee role updated successfully for employee_id ${employee_id}`);
        }
    });
});

app.use((req, res) => {
        res.status(404).end();
    });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

