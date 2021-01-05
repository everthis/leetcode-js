/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  const stack = []
  for(let e of nums) {
    if(stack.length === 0 || e > stack[stack.length - 1]) {
      stack.push(e)
      continue
    }
    let l = 0, r = stack.length - 1, mid
    while(l < r) {
      const mid = l + ((r - l) >> 1)
      if(e > stack[mid]) l = mid + 1
      else r = mid
    }
    stack[l] = e
  }
  return stack.length
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    const dp = new Array(nums.length).fill(0)
    dp[0] = 1
    let maxans = 1
    for(let i = 1; i < dp.length; i++) {
        let maxval = 0
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                maxval = Math.max(maxval, dp[j])
            }
        }
        dp[i] = maxval + 1
        maxans = Math.max(maxans, dp[i])
    }
    return maxans
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  const n = nums.length
  const tails = []
  let res = 0
  for(let e of nums) {
    let i = 0, j = res
    while(i !== j) {
      const mid = i + ((j - i) >> 1)
      if(tails[mid] < e) i = mid + 1
      else j = mid
    }
    tails[i] = e
    if(i === res) res++
  }
  return res
};
