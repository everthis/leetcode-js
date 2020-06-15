/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const hash = {};
  return single(n, hash);
};

function single(i, hash) {
  if (hash.hasOwnProperty(i)) {
    return hash[i];
  }
  if (i === 1) {
    hash[1] = 1;
    return 1;
  }
  if (i === 2) {
    hash[2] = 2;
    return 2;
  }
  hash[i] = single(i - 1, hash) + single(i - 2, hash);
  return hash[i];
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0)
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
