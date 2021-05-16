/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const rearrangeSticks = function(n, k) {
  const mod = BigInt(1e9 + 7)
  const g = Array.from({ length: 1001 }, () => Array(1001).fill(0n))
  g[1][1] = 1n
  for(let i = 2; i <= 1000; i++) {
    for(let j = 1; j <= i; j++ ) {
      g[i][j] = (g[i - 1][j - 1] + BigInt(i - 1) * g[i - 1][j] % mod) % mod
    }
  }
  return g[n][k]
};
