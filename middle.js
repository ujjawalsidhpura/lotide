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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// Pass

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

console.log(middle([1, 2, 3, 4, 5, 6]));