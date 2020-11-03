/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
  const m = words[0].length, len = words.length
  const n = target.length, a = 'a'.charCodeAt(0)
  const mod = 10 ** 9 + 7
  const dp = Array(n).fill(0)
  for(let i = 0; i < m; i++) {
    const freq = Array(26).fill(0)
    for(let j = 0; j < len; j++) {
      freq[words[j].charCodeAt(i) - a]++
    }
    for(let j = Math.min(i, n - 1); j >= 0; j--) {
      const code = target[j].charCodeAt(0) - a
      if(freq[code] > 0) {
        dp[j] += (j === 0 ? freq[code] : dp[j - 1] * freq[code])
        dp[j] %= mod
      }
    }
  }
  return dp[n - 1]
}

// another

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
