const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} === ${expected}`);
  }
}

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

console.log(assertArraysEqual([5, 2, 3], [1, 2, 3]))

assertEqual(assertArraysEqual([3, 2, 3], [1, 2, 3]), false)

const flatten = function (array) {
  let arr = [];
  array.map((element) => {
    if (Array.isArray(element)) {
      for (let i of element) {
        arr.push(i);
      }
    } else {
      arr.push(element);
    }
  })
  return arr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;