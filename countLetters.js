const countLetters = function (str) {
  let count = {};
  let string = str.split('');

  for (let letter of string) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
}

module.exports = countLetters;