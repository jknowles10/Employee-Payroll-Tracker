// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'

//Arrow functions
// - Not a good idea to use them for method definitions in object literals...bceause the bining of the 'this' keyword is done lexically
// - When defining function  expression, don't need 'function' keyword; can use => syntax instead
// - If there is only 1 argument, you don't need parentheses
// - If there is 0 or 2+ arguments, you need parentheses
// - Don't need brackets around code body if the code body is simply returning the result of a single expression


console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
