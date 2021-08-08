/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function(s, words) {
  let tmp = ''
  for(let w of words) {
    tmp += w
    if(tmp === s) return true
  }
  return false
};
