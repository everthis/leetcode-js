/**
 * @param {string} s
 * @return {boolean}
 */

const validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;

  const isPalindrome = function(start, end, removed) {
    while (start <= end) {
      if (s[start] !== s[end]) {
        if (removed) {
          return false;
        }

        return (
          isPalindrome(start + 1, end, true) ||
          isPalindrome(start, end - 1, true)
        );
      }
      start++;
      end--;
    }
    return true;
  };

  return isPalindrome(start, end, false);
};
