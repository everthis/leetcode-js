/**
 * @param {number[]} present
 * @param {number[]} future
 * @param {number} budget
 * @return {number}
 */
const maximumProfit = function(present, future, budget) {
  const dp = new Array(budget + 1).fill(0);
  for (let i = 0; i < present.length; i++){
    for (let j = budget; j >= 0; j--){
      if (j >= present[i] && present[i] < future[i]){
        dp[j] = Math.max(dp[j], dp[j - present[i]] + future[i] - present[i]);
      }
    }
  }
  return dp[budget];
};
