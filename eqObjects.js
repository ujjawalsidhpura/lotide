const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} === ${expected}`);
  }
}

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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;