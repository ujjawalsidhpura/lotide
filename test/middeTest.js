const assert = require('chai').assert;
const middle = require('../middle');
const eqArrays = require('../eqArrays');


//Test
// console.log(middle([1, 2, 3, 4, 5, 6]));

describe('middle', () => {
  it('Return 3 and 4 for array [1,2,3,4,5,6]', () => {
    assert.equal(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
  })
})