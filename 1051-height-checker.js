/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
  const arr = heights.slice(0).sort((a, b) => a - b)
  let res = 0
  for(let i = 0, len = heights.length; i < len; i++) {
    if(arr[i] !== heights[i]) res++
  }
  
  return res
};
