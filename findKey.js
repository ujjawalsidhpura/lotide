const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} === ${expected}`);
  }
}

const findKey = function (object, callback) {
  let star;
  for (let obj in object) {
    star = object.obj['stars'];

    if (obj['stars'] === callback(obj)) {
      return obj
    } else {
      return undefined
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));
