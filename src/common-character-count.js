const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let len = s1 <= s2 ? s1.length : s2.length,
  count = 0;
  for (let i=0; i<len; i++) {
    let char1 = s1.charAt[i], char2 = s2.charAt[i];
    if (char1 == char2) {
      count+=1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
