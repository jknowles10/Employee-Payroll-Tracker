const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input', 
        message: 'Enter your name:', 
        name: 'name',
    },  
    { 
        type: 'input', 
        message: 'Where are you located?',
        name: 'location',

    },
    { 
        type: 'input', 
        message: 'Tell us about yourself',
        name: 'bio',
    },
    {
        type: 'input', 
        message: 'What is your LinkedIn URL?', 
        name: 'linkedin',

    }, 
    {
        type: 'input', 
        message: 'What is your GitHub URL?', 
        name: 'github',
    } ])

    .then ((data) => {
        const filename = `${data.name.toLowerCase().split('').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\index.html'), (err) => 
            err? console.log(err) : console.log('Success!')
        );
    });