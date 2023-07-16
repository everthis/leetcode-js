/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function(word, forbidden) {
  let setF = new Set(forbidden)
  let res = 0, left = 0
  for(let i = 0; i < word.length; i++) {
    for(let j = Math.max(left, i - 10); j < i + 1; j++) {
      if(setF.has(word.slice(j, i + 1))) {
        left = j + 1
      }
    }
    res = Math.max(res, i - left + 1)
  }
  return res
};
