// Run this from the command line using 'node index.js'
(function () {
  console.log(this);
})();

function someFunction () {
  console.log(this); 
}
someFunction();

//outputs the window object