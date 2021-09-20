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

module.exports = eqArrays;