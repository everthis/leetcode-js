/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
const minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
  // 0: black, 1: white
  const n = floor.length
  // dp[i][j]: the minimum number of white tiles still visible
  // when using j tiles to cover the first i tiles 
  const dp = Array.from({ length: n + 1 }, () => Array(numCarpets + 1).fill(0))

  for(let i = 1; i <= n; i++) {
    for(let j = 0; j <= numCarpets; j++) {
      const skip = dp[i - 1][j] + (floor[i - 1] === '1' ? 1 : 0)
      const cover = j > 0 ? dp[Math.max(i - carpetLen, 0)][j - 1] : 1000
      dp[i][j] = Math.min(skip, cover)
    }
  }

  return dp[n][numCarpets]
};
