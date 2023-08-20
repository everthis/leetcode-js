/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
const maximizeTheProfit = function(n, offers) {
  const dp = Array(n + 1).fill(0);
  const m = [];
  for (const a of offers) {
    if(m[a[1]] == null) m[a[1]] = []  
    m[a[1]].push(a);
  }
  for (let e = 1; e <= n; e++) {
      dp[e] = dp[e - 1];
      for (let a of (m[e - 1] || []) ) {
          dp[e] = Math.max(dp[e], dp[a[0]] + a[2]);
      }
  }
  return dp[n];
};
