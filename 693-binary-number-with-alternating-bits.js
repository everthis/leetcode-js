/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function(n) {
  const str = bin(n);
  for (let i = 1, prev = str.charAt(0); i < str.length; i++) {
    if (str.charAt(i) === prev) {
      return false;
    }
    prev = str.charAt(i);
  }
  return true;
};

function bin(num) {
  return (num >>> 0).toString(2);
}
