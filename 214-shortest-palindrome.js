/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function(s) {
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === s.charAt(j)) { j += 1; }
  }
  if (j === s.length) { return s; }
  let suffix = s.substring(j);
  return suffix.split('').reverse().join('') + shortestPalindrome(s.substring(0, j)) + suffix;
};
