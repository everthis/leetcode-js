/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
  let count = 0;

  if (s == null || s.length === 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    extendPalindrome(s, i, i);
    extendPalindrome(s, i, i + 1);
  }

  function extendPalindrome(str, left, right) {
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      count++;
      left--;
      right++;
    }
  }
  return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
