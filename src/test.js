const isMessiJerseyNumber = require('./main.js');

console.log(isMessiJerseyNumber(10)); // true
console.log(isMessiJerseyNumber(30)); // true
console.log(isMessiJerseyNumber(7));  // false
console.log(isMessiJerseyNumber("10")); // true
console.log(isMessiJerseyNumber("Maradona")); //false
