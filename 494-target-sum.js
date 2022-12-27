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

    const halfSum = (target + sum) / 2;

    let dp = new Array(halfSum+1).fill(0);
    dp[0] = 1;

    for(let i = 0; i < nums.length; i++) {
        for(let j = halfSum; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[halfSum];
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
