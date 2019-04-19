/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    const rows = matrix.length
    const cols = rows > 0 ? matrix[0].length : 0
    const dp = Array.from(new Array(rows + 1), el => new Array(cols + 1).fill(0))
    let maxLen = 0
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
            if(matrix[i - 1][j - 1] === '1') {
               dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
               maxLen = Math.max(maxLen, dp[i][j])
            }
        }
    }
    
    return maxLen * maxLen
};

// another

const maximalSquare = function(matrix) {
  const rows = matrix.length
  if(rows === 0) return 0
  const cols = matrix[0].length
  const dp = new Array(cols + 1).fill(0)
  let max = 0
  let prev = 0
  let tmp
  for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= cols; j++) {
      tmp = dp[j]
      if(matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], dp[j], prev) + 1
        if(dp[j] > max) max = dp[j]
      } else {
        dp[j] = 0
      }
      prev = tmp
    }
  }
  return max ** 2
};
