/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let res = -1e9, sum = 0
  for(const e of nums) {
    sum += e
    res = Math.max(res, sum)
    if(sum < 0) sum = 0
  }
  return res
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let preSum = nums[0];
  let maxSum = preSum;
  for (let i = 1; i < nums.length; i++) {
    preSum = preSum > 0 ? preSum + nums[i] : nums[i];
    maxSum = Math.max(preSum, maxSum);
  }
  return maxSum;
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  const n = nums.length, dp = Array(n).fill(0)
  dp[0] = nums[0]
  let res = dp[0]
  for(let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i]
    res = Math.max(res, dp[i])
  }
  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  return helper(nums, 0, nums.length - 1)
};

function helper(arr, l, r) {
  if(l > r) return -Infinity
  const mid = l + ((r - l) >> 1)
  let cur = 0, leftMax = 0, rightMax = 0
  for(let i = mid - 1; i >= l; i--) {
    cur += arr[i]
    leftMax = Math.max(leftMax, cur)
  }
  cur = 0
  for(let i = mid + 1; i <= r; i++) {
    cur += arr[i]
    rightMax = Math.max(rightMax, cur)
  }
  const res = arr[mid] + leftMax + rightMax
  const leftRes = helper(arr, l, mid - 1)
  const rightRes = helper(arr, mid + 1, r)
  
  return Math.max(res, leftRes, rightRes)
}
