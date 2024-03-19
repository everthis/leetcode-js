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

// another

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const n = height.length, {min,max} = Math
  let i = 0, j = n - 1, leftMax = height[i], rightMax = height[j]
  let res = 0
  while(i < j) {
    res = max(res, (j - i) * min(leftMax, rightMax))
    if(leftMax <= rightMax) {
      i++
      leftMax = max(leftMax, height[i])
    } else {
      j--
      rightMax = max(rightMax, height[j])
    }
  }
  
  return res
};
