const assertArraysEqual = require('../assertArraysEqual')
const assertEqual = require('../assertEqual')

//Test
console.log(assertArraysEqual([5, 2, 3], [1, 2, 3]))

assertEqual(assertArraysEqual([3, 2, 3], [1, 2, 3]), false)