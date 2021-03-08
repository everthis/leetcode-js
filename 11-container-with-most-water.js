/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let res = 0, l = 0, r = height.length - 1
  while(l < r) {
    const tmp = (r - l) * Math.min(height[l], height[r])
    if(tmp > res) res = tmp
    if(height[l] < height[r]) l++
    else r--
  }
  return res
};
