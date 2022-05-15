/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
  special.sort((a, b) => a - b)
  let res = 0
  
  if(bottom < special[0]) {
    res = special[0] - bottom
  }
  for(let i = 1; i < special.length; i++) {
    res = Math.max(res, special[i] - special[i - 1] - 1)
  }
  if(top > special[special.length - 1]) {
    res = Math.max(res, top - special[special.length - 1])
  }
  
  return res
};
