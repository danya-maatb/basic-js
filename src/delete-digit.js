const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let deleted_cur = 0, deleted_new = 0;
  function deleteCharAt(n, i) {
    temp = String(n).split('');
    temp.splice(i, 1);
    return +temp.join('');
  }

  for (let i=0; i<String(n).length; i++) {
    deleted_new = deleteCharAt(n, i);
    if (deleted_new > deleted_cur) {
      deleted_cur = deleted_new;
    }
  }
return deleted_cur
}

module.exports = {
  deleteDigit
};
