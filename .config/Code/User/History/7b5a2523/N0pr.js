// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? spread: not in a function, in an array
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do? reduces values in an array into single value
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter? 
//rest - being used as last parameter in funct def
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
