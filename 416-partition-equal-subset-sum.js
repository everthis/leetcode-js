/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {
    let sum = 0
    for(let num of nums) {
      sum += num
    }
    
    if(sum & 1 === 1) {
       return false
    }
    
    sum /= 2
    let n = nums.length
    const dp = Array.from(new Array(n+1), () => [])
    for(let i = 0; i < dp.length; i++) {
      dp[i] = new Array(sum+1).fill(false)
    }
    dp[0][0] = true
    for(let i = 1; i < n + 1; i++) {
      dp[i][0] = true
    }
    for(let j = 1; j < sum + 1; j++) {
      dp[0][j] = false
    }
    for(let i = 1; i < n + 1; i++) {
      for(let j = 1; j < sum + 1; j++) {
        if(j >= nums[i - 1]) {
          dp[i][j] = (dp[i -1][j] || dp[i - 1][j - nums[i - 1]])
        }
      }
    }
    return dp[n][sum]
};
