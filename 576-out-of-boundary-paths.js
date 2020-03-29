/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const findPaths = function (m, n, N, i, j) {
  const dp = [...Array(2)].map((_) =>
    [...Array(50)].map((_) => Array(50).fill(0))
  )
  while (N-- > 0) {
    for (let i = 0; i < m; i++) {
      for (let j = 0, nc = (N + 1) % 2, np = N % 2; j < n; j++) {
        dp[nc][i][j] =
          ((i === 0 ? 1 : dp[np][i - 1][j]) +
            (i === m - 1 ? 1 : dp[np][i + 1][j]) +
            (j === 0 ? 1 : dp[np][i][j - 1]) +
            (j === n - 1 ? 1 : dp[np][i][j + 1])) %
          1000000007
      }
    }
  }
  return dp[1][i][j]
}

// another

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const findPaths = function (m, n, N, i, j) {
  if (N <= 0) return 0;
  const MOD = 1000000007;
  let count = Array.from({ length: m }, () => new Array(n).fill(0));
  count[i][j] = 1;
  let result = 0;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let step = 0; step < N; step++) {
    const temp = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        for (let d of dirs) {
          const nr = r + d[0];
          const nc = c + d[1];
          if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
            result = (result + count[r][c]) % MOD;
          } else {
            temp[nr][nc] = (temp[nr][nc] + count[r][c]) % MOD;
          }
        }
      }
    }
    count = temp;
  }
  return result;
};

// another

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const findPaths = function (m, n, N, i, j, memo = new Map()) {
    const key = N + ',' + i + ',' + j;
    if (memo.has(key)) return memo.get(key);
    const isOutside = i === -1 || i === m || j === -1 || j === n;
    if (N === 0 || isOutside) return +isOutside;
    memo.set(key, (
          findPaths(m, n, N - 1, i - 1, j, memo)
        + findPaths(m, n, N - 1, i + 1, j, memo)
        + findPaths(m, n, N - 1, i, j + 1, memo)
        + findPaths(m, n, N - 1, i, j - 1, memo)
    ) % 1000000007);
    return memo.get(key);
}



