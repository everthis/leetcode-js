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
  const n = height.length
  let l = 0, r = n - 1, res = 0, leftMax = 0, rightMax = 0
  while(l <= r) {
    if(height[l] <= height[r]) {
      if(height[l] >= leftMax) leftMax = height[l]
      else res += leftMax - height[l]
      l++
    } else {
      if(height[r] >= rightMax) rightMax = height[r]
      else res += rightMax - height[r]
      r--
    }
  }
  return res
};

// another

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    const n = height.length
    if(n === 0) return 0
    let res = 0
    let l = 0, r = n - 1, leftMax = height[l], rightMax = height[r]
    while(l < r) {
      if(height[l] <= height[r]) {
        l++
        leftMax = Math.max(leftMax, height[l])
        res += (leftMax - height[l]) 
      } else {
        r--
        rightMax = Math.max(rightMax, height[r])
        res += rightMax - height[r]
      }
    }

    return res
};

// another

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const n = height.length, { max } = Math
  let res = 0, l = 0, r = n - 1, leftMax = height[0], rightMax = height[n - 1]
  while(l <= r) {
    if(leftMax < rightMax) {
      leftMax = max(leftMax, height[l])
      res += leftMax - height[l]
      l++
    } else {
      rightMax = max(rightMax, height[r])
      res += rightMax - height[r]
      r--
    }
  }

  return res
};
