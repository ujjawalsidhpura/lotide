// const head = require('../head');
// const assertEqual = require('../assertEqual')


// //test case
// console.log(assertEqual(head([1, 2, 3, 4, 5, 6]), 6));

const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('return 1 from [1,2,3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  })

  it("return 5 from ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  })

})