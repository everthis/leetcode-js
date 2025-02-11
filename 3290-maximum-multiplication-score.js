/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function(a, b) {
   const dp = Array(4).fill(-4 * 1e5 * 1e5)
   const {max} = Math
   for(const e of b) {
     dp[3] = max(dp[3], dp[2] + e * a[3])
     dp[2] = max(dp[2], dp[1] + e * a[2])
     dp[1] = max(dp[1], dp[0] + e * a[1])
     dp[0] = max(dp[0], e * a[0])
   }

   return dp[3] 
};
