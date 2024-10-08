const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

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
.then ((data) => {
const filename = `${data.name.toLowerCase().split('').join('')}.html`;

fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => 
 err? console.log(err) : console.log('Success!')
);

} );