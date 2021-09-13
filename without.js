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

const without = function (arr1, arr2) {
  let result = [];

  for (let i of arr1) {
    if (!arr2.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

//Test Cases

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); // => True