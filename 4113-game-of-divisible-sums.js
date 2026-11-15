/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDifference = function(nums) {
    const n = nums.length
    const LLMIN = -(2**63)
    const dp = Array(n + 2).fill(0)

    for(let i = n - 1; i >= 0; i--) {
        const sum1 = nums[i]
        const op1 = sum1 + ( !(sum1 % 3) ? -dp[i + 1] : dp[i + 1])
        let op2 = LLMIN
        if(i + 1 < n) {
            const sum2 = nums[i] + nums[i + 1]
            op2 = sum2 + ( !(sum2 % 3) ? -dp[i + 2] : dp[i + 2])
        }
        dp[i] = Math.max(op1, op2)
    }

    return dp[0]
};
