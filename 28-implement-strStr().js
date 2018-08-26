/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) {
        return i;
      }
      if (i + j === haystack.length) return -1;
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }
    }
  }
};
