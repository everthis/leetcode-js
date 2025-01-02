/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = function(nums, left, right) {
  const n = nums.length;
    let res = 0
    const preLargerOrEqual = Array(n).fill(-1)
    const postLarger = Array(n).fill(n)
    let stk = []
    stk.push(0)
    for(let i = 1; i < n; i++) {
        const e = nums[i]
        while(stk.length && nums[stk[stk.length - 1]] < e) {
            stk.pop()
        }
        if(stk.length) {
            preLargerOrEqual[i] = stk[stk.length - 1]
        }
        stk.push(i)
    }
    stk = []
    stk.push(n - 1)
    for(let i = n - 2; i >= 0; i--) {
        const e = nums[i]
        while(stk.length && nums[stk[stk.length - 1]] <= e) {
            stk.pop()
        }
        if(stk.length) {
            postLarger[i] = stk[stk.length - 1]
        }
        stk.push(i)
    }
    for(let i = 0; i < n; i++) {
        const e = nums[i]
        if(e >= left && e <= right) {
            const pre = preLargerOrEqual[i]
            const post = postLarger[i]
            res += (i - pre) * (post - i)
        }
    }

    return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = function(nums, left, right) {
  let prev = -1, res = 0, dp = 0
  const n = nums.length

  for(let i = 0; i < n; i++) {
    const e = nums[i]
    if(e < left) {
    
    } else if(e > right) {
      prev = i
      dp = 0
    } else {
      dp = i - prev
    }

    res += dp
  }
  
  return res
};

// another

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const numSubarrayBoundedMax = function(A, L, R) {
    let res = 0;
    let j = 0;
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        if(A[i] >= L && A[i] <= R) {
            res += i - j + 1
            count = i - j + 1
        } else if(A[i] < L) {
            res += count
        } else {
            j = i + 1
            count = 0
        }
    }
    return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = function(nums, left, right) {
  let prev = -1, dp = 0, res = 0
  for(let i = 0, n = nums.length; i < n; i++) {
    const cur = nums[i]
    if(cur < left) res += dp
    else if(cur > right) {
      dp = 0
      prev = i
    } else {
      dp = i - prev
      res += dp
    }
  }
  return res
};
