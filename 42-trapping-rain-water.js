/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    
    let s = height.length
    if(s === 0) return 0
    let res = 0
    const left_max = [height[0]]
    const right_max = []
    right_max[s - 1] = height[s - 1]
    for(let i = 1; i < s; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1])
    }
    for(let i = s - 2; i >= 0; i--) {
        right_max[i] = Math.max(height[i], right_max[i + 1])
    }
    for(let i = 1; i < s - 1; i++) {
        res += Math.min(left_max[i], right_max[i]) - height[i] 
    }
    return res
};

// another

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const len = height.length
  if (len === 0) return 0
  const leftMax = [height[0]]
  const rightMax = []
  rightMax[len - 1] = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }
  let res = 0
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return res
}

// another

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const len = height.length
  if(len === 0) return 0
  let left = 0
  let right = len - 1
  let leftMax = 0
  let rightMax = 0
  let res = 0
  while(left < right) {
    if(height[left] < height[right]) {
      if(height[left] <= leftMax) {
        res += leftMax - height[left]
      } else {
        leftMax = height[left]
      }
      left++
    } else {
      if(height[right] <= rightMax) {
         res += rightMax - height[right]
      } else {
        rightMax = height[right]
      }
      right--
    }
  }
  return res
};  
