/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function(S) {
  let res = 0,
    bal = 0;
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === "(") {
      bal += 1;
    } else {
      bal -= 1;
      if (S.charAt(i - 1) === "(") {
        res += 1 << bal;
      }
    }
  }
  return res;
};
