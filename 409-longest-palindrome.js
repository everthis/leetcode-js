/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const hash = {};
  let c;
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    if (hash.hasOwnProperty(c)) {
      hash[c] += 1;
    } else {
      hash[c] = 1;
    }
  }
  let res = 0;
  let val;
  for (let k in hash) {
    if (hash.hasOwnProperty(k)) {
      val = hash[k];
      res += Math.floor(val / 2) * 2;
      if (res % 2 === 0 && val % 2 === 1) {
        res += 1;
      }
    }
  }

  return res;
};
