/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let dp = Array(k + 1).fill(0);
    for (let i = 0; i < piles.length; i++) {
      const next = Array(k + 1).fill(0);
      for (let l = 1; l <= k; l++) {
        let sum = 0;
        next[l] = dp[l];
        for (let j = 0; j < Math.min(piles[i].length, l); j++) {
          sum += piles[i][j];
          next[l] = Math.max(next[l], dp[l - j - 1] + sum);
        }
      }
      dp = next;
    }
    return dp[k];    
};
