const tail = require('../tail');
const assertEqual = require('../assertEqual');

//Test

console.log(assertEqual(tail([1, 2, 3]), 3))
console.log(assertEqual(tail([1, 2, 3]), 1))