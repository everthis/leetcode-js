/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let res = 0, num = 0
  for(let ch of s) {
    num += ch === 'L' ? 1 : -1
    if(num === 0) res++
  }
  return res
};
