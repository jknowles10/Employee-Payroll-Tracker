// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Complete the `writeToLog` function such that it will take in data and use it to write to a file called `log.txt`.
const writeToLog = (data) => {
fs.writeFile('log.txt', data, (err) => {

    err? console.log(err): console.log ("success")
} )

}

// the `addFunc` function will add two values that are passed in
const addFunc = (x, y) =>{
    let message;

    // This conditional validates whether the correct amount of inputs have been provided
    if (y === undefined) {
        // TODO: Set the `message` variable to a string that explains that an incorrect number of arguments have been passed in.
        // TODO: Call the `writeToLog` function and pass in the `message` as an argument.
      message = "Incorrect number of arguments entered";   
     writeToLog(message);

    } else {
        let num1 = parseInt(x)
        let num2 = parseInt(y)
        // TODO: Set the `message` variable to the sum of `num1` and num2`
        message = num1 + num2;
        // TODO: Call the `writeToLog` function and pass in the `message` as an argument.
        writeToLog(message);
    }
}


// call the `addFunc` passing in a number and a string.
addFunc(process.argv[2], process.argv[3]);
