/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxPalindromes = function(s, k) {
  const len = s.length;
  // dp[i] 表示s[0 .. i - 1] 中的不重叠回文子字符串的最大数目
  const dp = new Array(len + 1).fill(0);
  // 如果s[i]不在回文字符串内，dp[i+1]=dp[i];
  // 如果s[l..r]是回文字符串且长度不小于k，那么dp[r+1]=max(dp[r+1],dp[l]+1)

  // 中心扩展法
  // 回文中心：len个单字符和len-1个双字符
  for (let center = 0; center < 2 * len - 1; center++) {
    let l = center >> 1,
      r = l + (center % 2);
    dp[l + 1] = Math.max(dp[l + 1], dp[l]);
    while (l >= 0 && r < len && s[l] === s[r]) {
      if (r - l + 1 >= k) {
        dp[r + 1] = Math.max(dp[r + 1], dp[l] + 1);
      }
      // expand from center
      l--, r++;
    }
  }

  return dp[len];
};
