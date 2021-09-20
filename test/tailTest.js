const tail = require('../tail');
const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

//Test

// console.log(assertEqual(tail([1, 2, 3]), 3))
// console.log(assertEqual(tail([1, 2, 3]), 1))

describe('middle', () => {
  it('Return [2,3,4,5,6] for array [1,2,3,4,5,6]', () => {
    assert.equal(eqArrays(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]), true);
  })
})