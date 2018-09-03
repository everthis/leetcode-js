/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function(str) {
  return str
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
};
