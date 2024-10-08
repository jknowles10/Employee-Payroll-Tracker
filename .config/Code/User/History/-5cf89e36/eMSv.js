const inquirer = require("inquirer");
const colors = require("colors");

inquirer
.prompt ([
{
type: "list", 
message: "What color would you like to use?", 
name: "color", 
choices: ["red", "blue", "green", "yellow", "cyan", "magenta"]


}

])

.then((response) =>
    console.log(colors[response.color](`(message) ${response.color}`) )

);