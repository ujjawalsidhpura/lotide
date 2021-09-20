const assert = require('chai').assert;
const assertEqual = require('../assertEqual')


//test case
// console.log(assertEqual('a', 'a'))

describe('assertEqual', () => {
  it('Should return true for a equal a', () => {
    assert.strictEqual(assertEqual('a', 'a'), 'a')
  })
})