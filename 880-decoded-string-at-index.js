/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

const decodeAtIndex = function(S, K) {
  let n = S.length;
  let dp = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (S[i] >= "2" && S[i] <= "9") {
      dp[i + 1] = dp[i] * (S[i] - "0");
    } else {
      dp[i + 1] = dp[i] + 1;
    }
  }
  K--;
  for (let i = n - 1; i >= 0; i--) {
    K %= dp[i + 1];
    if (K + 1 == dp[i + 1] && !(S[i] >= "2" && S[i] <= "9")) {
      return "" + S[i];
    }
  }
  return null;
};
