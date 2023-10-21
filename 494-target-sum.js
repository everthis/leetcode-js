/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function(nums, target) {
  const n = nums.length
  let res = 0
  for(let i = 0, limit = Math.pow(2, n); i < limit; i++) {
    if(helper(i)) res++
  }
  
  return res
  
  function helper(mask) {
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
      if(mask & (1 << i)) {
        sum += nums[i]
      } else sum -= nums[i]
    }
    
    return sum === target
  }
};

// another

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a+b);
    if(Math.abs(target) > sum) {
        return 0;
    }
    if((target + sum) % 2) {
        return 0;
    }
    const newTarget = (target + sum) / 2;
    let dp = new Array(newTarget+1).fill(0);
    dp[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = newTarget; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[newTarget];
};



// another

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = function(nums, s) {
  const sum = nums.reduce((p, n) => p + n, 0);
  return sum < s || (s + sum) % 2 > 0 ? 0 : subsetSum(nums, (s + sum) >>> 1);
};

function subsetSum(nums, s) {
  const dp = Array(s + 1).fill(0);
  dp[0] = 1;
  for (let n of nums) {
    for (let i = s; i >= n; i--) dp[i] += dp[i - n];
  }
  return dp[s];
}
