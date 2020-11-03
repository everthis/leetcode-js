/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
  const m = words[0].length
  const n = target.length
  const memo = Array.from({ length: m }, () => Array(n))
  const charAtIndexCnt = Array.from({ length: 128 }, () => Array(m).fill(0))
  const mod = 10 ** 9 + 7
  for (let word of words) {
    for (let i = 0; i < m; i++) {
      charAtIndexCnt[word.charCodeAt(i)][i] += 1
    }
  }

  return dp(0, 0)
  function dp(k, i) {
    // found one
    if (i == n) return 1
    // not found
    if (k == m) return 0
    if (memo[k][i] != null) return memo[k][i]
    const c = target.charCodeAt(i)
    // skip k_th char
    let ans = dp(k + 1, i)
    if (charAtIndexCnt[c][k] > 0) {
      ans += dp(k + 1, i + 1) * charAtIndexCnt[c][k]
      ans %= mod
    }
    return (memo[k][i] = ans)
  }
}
