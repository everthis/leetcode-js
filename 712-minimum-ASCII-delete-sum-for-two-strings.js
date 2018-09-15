/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = function(s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;
  const dp = [];
  for (let i = 0; i <= l1; i++) {
    dp[i] = [];
  }
  let sum = 0;
  for (let i = 0; i <= l1; i++) {
    for (let j = 0; j <= l2; j++) {
      if (i === 0 || j === 0) {
        sum = 0;
        for (let k = 0; k < Math.max(i, j); k++) {
          sum += i > j ? s1.charCodeAt(k) : s2.charCodeAt(k);
        }
        dp[i][j] = sum;
      } else {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            s1.charCodeAt(i - 1) + dp[i - 1][j],
            s2.charCodeAt(j - 1) + dp[i][j - 1],
            s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1) + dp[i - 1][j - 1]
          );
        }
      }
    }
  }
  return dp[l1][l2];
};
