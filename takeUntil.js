
const eqArrays = function (arr1, arr2) {
  let response = true;
  if (arr1.length !== arr2.length) {
    response = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      response = false;
    }
  }
  return response;
}

const assertArraysEqual = function (arr1, arr2) {
  return eqArrays(arr1, arr2);
}

const takeUntil = function (array, callback) {
  let output = array.map(callback)
  return output
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

module.exports = takeUntil;