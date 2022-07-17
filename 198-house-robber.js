/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    if (nums.length == 0) return 0;
    let prev1 = 0;
    let prev2 = 0;
    for (let num of nums) {
        let tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }
    return prev1;
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  const n = nums.length
  const dp = Array(n+1).fill(0)
  dp[1] = nums[0] 
    
  for(let i = 1; i < n; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
  }
  
  return dp[n]
};
