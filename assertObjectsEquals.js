const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const eqObjects = function (object1, object2) {
  arr1 = Object.keys(object1);
  arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let key in object1) {
    if (object1[key] === object2[key]) {
      return true
    } else {
      return false;
    }
  }
  return arr1
};
