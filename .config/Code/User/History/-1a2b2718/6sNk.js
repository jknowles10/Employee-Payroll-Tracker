// TODO: Import `basicmath.js`
const basicmath = require('./basicmath.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = process.argv[3];
const numTwo = process.argv[4];


// TODO: Create a `switch` statement that accepts an `operation` parameter

// and each `case` uses the corresponding `maths` method

// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
    case 'sum':
        console.log(bm.sum(numOne, numTwo));
        break; 
    case 'difference':
        console.log(bm.difference(numOne, numTwo));
        break;
    case 'product':
        console.log(bm.product(numOne, numTwo));8888889 
        break;
    case 'quotient':
        console.log(bm.quotient(numOne, numTwo));
        break;
    default:
        console.log()
}

module.exports = 