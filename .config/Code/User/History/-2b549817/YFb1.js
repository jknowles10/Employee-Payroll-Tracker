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

   
.then((data)  => {

const htmlInput = 

    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1> ${data.name}'s Portfolio' </h1>

    <h2> Name </h2>
    <p> ${data.name} </p>
    <h2>  Location </h2>
    <p> ${data.location} </p>
    <h2> Bio </h2>
    <p> ${data.bio} </p>   
    <h2> LinkedIn URL </h2>
    <p> ${data.linkedin} </p>
    <h2>  GitHub URL </h2>
    <p> ${data.github} </p>
    
</body>
</html>`;

console.log(htmlInput);
fs.writeFile('index.html', htmlInput, (err) => 
    err? console.log(err) : console.log('HTML file created!')

);
});