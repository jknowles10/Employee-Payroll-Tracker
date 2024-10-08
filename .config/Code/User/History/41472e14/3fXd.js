const inquirer = require('inquirer');
const colors = require('colors');

inquirer
.prompt ([
    {
        type: 'input', 
        message: colors.brightMagenta('What is your name?'), 
        name: 'name',
    }, 
    {
       type: 'checkbox', 
       message: colors.brightMagenta('What languages do you know?'),
       name: 'languages',  
       choices: ['JavaScript', 'Python', 'C++', 'Java', 'Go'],
    }, 
    {
        type: 'list', 
        message: colors.brightMagenta('What is your preferred method of commuincation?'),
        name: 'contact',
        choices: ['Email', 'Phone', 'telekinesis'],

    }
])
.then ((response) =>
response.
)