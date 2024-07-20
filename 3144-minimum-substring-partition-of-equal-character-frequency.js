/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill();
  dp[0] = 0;
  const chars = new Array(26).fill();

  for (let i = 0; i < n; i++) {
    dp[i + 1] = 1 + dp[i];
    chars.forEach((_, idx) => (chars[idx] = undefined));
    const idxOne = s.charCodeAt(i) - 97;
    chars[idxOne] = 1;

    for (let j = i - 1; j >= 0; j--) {
      const idxTwo = s.charCodeAt(j) - 97;
      chars[idxTwo] = (chars[idxTwo] || 0) + 1;
      if (isOk(chars)) {
        dp[i + 1] = Math.min(dp[j] + 1, dp[i + 1]);
      }
    }
  }

  return dp[n];
};

function isOk(chars) {
  let freq = undefined;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === undefined) continue;
    if (freq === undefined) {
      freq = chars[i];
    } else if (chars[i] !== freq) {
      return false;
    }
  }
  return true;
}
