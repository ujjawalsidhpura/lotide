const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

let output = []

const middle = function (array) {
  let len = array.length
  if (len === 1 || len === 2) {
    return [];
  } else if (len === 3) {
    return output.push(array[1]);
  } else if (len === 5) {
    return output.push(array[2]);
  } else if (len === 4) {
    output.push(array[1])
    output.push(array[2]);
    return output;
  } else if (len === 6) {
    output.push(array[2]);
    output.push(array[3]);
    return output;
  }
}

module.exports = middle;

