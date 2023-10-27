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

// another

/**
 * @param {number[]} present
 * @param {number[]} future
 * @param {number} budget
 * @return {number}
 */
const maximumProfit = function(present, future, budget) {
    const n = present.length
    const dp = Array.from({ length: n + 1 }, () => Array(budget + 1).fill(0))

    for(let b = 0; b <= budget; b++) {
        for(let i = 1; i <= n; i++) {
            const cost = present[i - 1]
            const diff = future[i - 1] - cost
            dp[i][b] = dp[i - 1][b]
            if(b >= cost) {
                dp[i][b] = Math.max(dp[i][b], dp[i - 1][b - cost] + diff)
            }
        }
    }

    return dp[n][budget]
  };
