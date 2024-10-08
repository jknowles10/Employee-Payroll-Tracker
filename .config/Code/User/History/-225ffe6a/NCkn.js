const colors = require("colors");

const name = process.argv[2];
const amt = process.argv[3];


if (parseInt(amt) > 0 ) {
    console.log (`My name is ${colors.bgYellow.name} and I made $${colors.green.amt} this quarter.`);
 if (    parseInt(amt) < 0 ) {

    console.log (`My name is ${name} and I made ${colors.red.amt} quarter.`);


   } 

};
