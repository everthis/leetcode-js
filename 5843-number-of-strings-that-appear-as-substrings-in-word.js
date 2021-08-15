/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = function(patterns, word) {
  let res = 0
  for(let e of patterns) {
    if(word.indexOf(e) !== -1) res++
  }
  return res
};
