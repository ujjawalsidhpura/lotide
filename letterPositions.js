const letterPositions = function (sentence) {
  const results = {};
  const string = sentence.split(' ').join('').split('')

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));