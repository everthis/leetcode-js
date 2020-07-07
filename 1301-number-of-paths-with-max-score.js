/**
 * @param {string[]} board
 * @return {number[]}
 */
const pathsWithMaxScore = (
  A,
  dirs = [
    [-1, -1],
    [-1, 0],
    [0, -1],
  ],
  mod = 1e9 + 7
) => {
  const N = A.length
  const S = [...Array(N + 1)].map((row) => Array(N + 1).fill(0)),
    P = [...Array(N + 1)].map((row) => Array(N + 1).fill(0))
  P[0][0] = 1
  for (let i = 1; i <= N; ++i) {
    for (let j = 1; j <= N; ++j) {
      if (A[i - 1][j - 1] == 'X') continue
      for (let d of dirs) {
        const u = i + d[0],
          v = j + d[1]
        const sum = !P[u][v]
          ? 0
          : S[u][v] +
            (i == 1 && j == 1
              ? 0
              : i == N && j == N
              ? 0
              : A[i - 1].charCodeAt(j - 1) - '0'.charCodeAt(0))
        if (S[i][j] == sum) P[i][j] = (P[i][j] + P[u][v]) % mod
        if (S[i][j] < sum) (S[i][j] = sum), (P[i][j] = P[u][v])
      }
    }
  }
  return [S[N][N], P[N][N]]
}

// another

/**
 * @param {string[]} board
 * @return {number[]}
 */
const pathsWithMaxScore = (
  board,
  DIRS = [
    [-1, -1],
    [-1, 0],
    [0, -1],
  ],
  mod = 1e9 + 7
) => {
  const m = board.length,
    n = board[0].length
  const dpSum = Array.from({ length: m }, () => Array(n).fill(0))
  const dpCnt = Array.from({ length: m }, () => Array(n).fill(0))
  dpCnt[m - 1][n - 1] = 1 // start at the bottom right square
  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      if (dpCnt[r][c] === 0) continue // can't reach to this square
      for (let dir of DIRS) {
        let nr = r + dir[0],
          nc = c + dir[1]
        if (nr >= 0 && nc >= 0 && board[nr].charAt(nc) !== 'X') {
          let nsum = dpSum[r][c]
          if (board[nr].charAt(nc) !== 'E') nsum += board[nr].charAt(nc) - '0'
          if (nsum > dpSum[nr][nc]) {
            dpCnt[nr][nc] = dpCnt[r][c]
            dpSum[nr][nc] = nsum
          } else if (nsum === dpSum[nr][nc]) {
            dpCnt[nr][nc] = (dpCnt[nr][nc] + dpCnt[r][c]) % mod
          }
        }
      }
    }
  }
  return [dpSum[0][0], dpCnt[0][0]]
}

