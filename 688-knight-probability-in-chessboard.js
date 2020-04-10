/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
const knightProbability = function (N, K, r, c) {
  const moves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ]
  const dp = [...Array(K + 1)].map(() =>
    [...Array(N)].map(() => Array(N).fill(0))
  )
  dp[0][r][c] = 1
  for (let step = 1; step <= K; step++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        for (let move of moves) {
          let row = i + move[0],
            col = j + move[1]
          if (row >= 0 && row < N && col >= 0 && col < N)
            dp[step][i][j] += dp[step - 1][row][col] / 8
        }
      }
    }
  }
  let res = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += dp[K][i][j]
    }
  }
  return res
}

