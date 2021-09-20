const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const assertEqual = require('../assertEqual')

//Test
// console.log(assertArraysEqual([5, 2, 3], [1, 2, 3]))

// assertEqual(assertArraysEqual([3, 2, 3], [1, 2, 3]), false)

describe('assertArraysEqual', () => {

  it('give true for [1,2,3] and [1,2,3]', () => {
    assert.strictEqual(assertEqual(assertArraysEqual([3, 2, 3], [1, 2, 3]), false))
  })
})