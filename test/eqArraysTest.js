const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//Test
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2]), true));

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

describe('eqArrays', () => {
  it('should return true for equal arrays', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true)
  })
})