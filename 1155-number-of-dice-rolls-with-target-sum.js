/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
const numRollsToTarget = function(d, f, target) {
  const mod = 10 ** 9 + 7
  if (target > d * f || target < d) {
    return 0
  }
  const dp = new Array(target + 1).fill(0)
  for (let i = 1; i < Math.min(f + 1, target + 1); i++) {
    dp[i] = 1
  }
  for (let i = 2; i < d + 1; i++) {
    for (let j = Math.min(target, i * f); j > i - 1; j--) {
      dp[j] = 0
      for (let k = Math.max(i - 1, j - f); k < j; k++) {
        dp[j] = (dp[j] + dp[k]) % mod
      }
    }
  }

  return dp[target]
}

// another

const numRollsToTarget = function(d, f, target) {
  const MOD = 10 ** 9 + 7;
  const dp = Array.from({ length: d + 1 }, () => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= target; j++) {
      if (j > i * f) {
        continue;
      } else {
        for (let k = 1; k <= f && k <= j; k++) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
        }
      }
    }
  }
  return dp[d][target];
};
