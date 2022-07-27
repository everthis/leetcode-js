/**
 * @param {number[]} flips
 * @return {number}
 */
const numTimesAllBlue = function(flips) {
  let res = 0, right = 0, n = flips.length
  
  for(let i = 0; i < n; i++) {
    right = Math.max(right, flips[i])
    if(right === i + 1) res++
  }
  
  return res
};
