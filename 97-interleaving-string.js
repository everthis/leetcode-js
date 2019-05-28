/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function(s1, s2, s3) {
  const len3 = s3.length
  const len1 = s1.length
  const len2 = s2.length
  if(len1 + len2 !== len3) return false
  
  const dp = Array.from({length: len1 + 1}, () => new Array(len2 + 1).fill(false))
  for(let i = 0; i <= len1; i++) {
    for(let j = 0; j <= len2; j++) {
      if(i === 0 && j === 0) {
        dp[i][j] = true
      } else if(i === 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]   
      } else if(j === 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]      
      } else {
        dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
      }
    }
  }
  
  return dp[len1][len2]
};
