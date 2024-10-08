const colors = require("colors");

const name = process.argv[2];
const amt = process.argv[3];


if (parseInt(amt) > 0 ) {
    console.log (`My name is ${name} and I made $${amt.green} this quarter.`);
    
};
