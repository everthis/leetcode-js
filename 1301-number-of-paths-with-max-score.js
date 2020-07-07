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
