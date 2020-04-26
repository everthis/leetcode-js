/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
  let dp = new Array(text1.length + 1)
  for (let i = 0; i < dp.length; i++)
    dp[i] = new Array(text2.length + 1).fill(0)
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (text1[i - 1] == text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1]
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp[dp.length - 1].pop()
}

// another

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
  const len1 = text1.length
  const len2 = text2.length
  if(len1 === 0 || len2 === 0) return 0
  const dp = Array(len2 + 1).fill(0)
  for(let i = 1; i <= len1; i++) {
    let prev = 0
    for(let j = 1; j <= len2; j++) {
      const tmp = dp[j]
      if(text1[i - 1] === text2[j - 1]) dp[j] = Math.max(dp[j], prev + 1)
      else {
        dp[j] = Math.max(dp[j - 1], dp[j])
      }
      prev = tmp
    }
  }
  return dp[len2]
};
