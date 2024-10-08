const inquirer = require ('inquirer');
const { Pool } = require('pg');
const express = require('express');


//const company = [
 //   {department: "Administration", role: "CEO, Administrative Assistant", id: "06"}, 
 //   {department: "Human Resources", role: "HR Manager, HR Associate", id: "01"},
 //   {department: "Accounting", role: "Accounting Manager, Accountant", id:"02"}, 
 //   {department: "Marketing", role: "Marketing Manager, Marketing Executive", id: "03"}, 
 //   {department: "Sales", role: "Sales Manager, Sales Representative", id: "04"}, 
 //   {department: "IT", role: "IT Manager, IT Sepcialist", id:"05"},
// ]


const options = [
    {
        type: 'list',
        name: 'departments',
        message: 'View all departments:',
        console.table(DEPARTMENTS TABLE);
    }
    {
        type: 'confirm',
        name: 'roles',
        message: 'View all roles:',
        console.table(ROLES TABLE);
        
    }, 
    {
        type: 'search-list',
        name: 'employees',
        message: 'View All Employees:'
        console.table(Employees TABLE = first name, last name)
    }, 
    {
        type: 'input',
        name: 'addDepartment',
        message: 'Add Department:'
    }, 
    {
        type: 'input',
        name: 'addRole',
        message: 'Add a role:'
    }, 
    {
        type: 'input',
        name: 'addEmployee',
        message: 'Add an employee'
    }, 
    {
        type: 'search-list',
        name: 'updateEmployee',
        message: 'Update an Employee'
        choices: ["Luke Cannon", "Brenda Sewell", "Jason Taylor", "David Smith", "Samantha Johnson", "Jessica Williams", "Michael Thompson", "Emily Jackson", "Daniel White", "Robert Brown", "Christopher Davis", "Anna Miller"],
   //add function to choose which variable to update: role, salary, role id, manager id
    
    }
]

inquirer.prompt(options)
async (function(answers) {
    console.log(JSON.stringify(answers, null, " "));
})
await (e => console.log(e));

