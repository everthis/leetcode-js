/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function(s, t) {
  const tlen = t.length
  const slen = s.length
  const mem = Array.from({ length: tlen + 1 }, () =>
    new Array(slen + 1).fill(0)
  )
  for (let j = 0; j <= slen; j++) {
    mem[0][j] = 1
  }
  for (let i = 0; i < tlen; i++) {
    for (let j = 0; j < slen; j++) {
      if (t.charAt(i) === s.charAt(j)) {
        mem[i + 1][j + 1] = mem[i][j] + mem[i + 1][j]
      } else {
        mem[i + 1][j + 1] = mem[i + 1][j]
      }
    }
  }
  return mem[tlen][slen]
}


// another

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function(s, t) {
  const m = t.length,
    n = s.length
  const cur = new Array(m + 1).fill(0)
  cur[0] = 1
  for (let j = 1; j <= n; j++) {
    let pre = 1
    for (let i = 1; i <= m; i++) {
      let temp = cur[i]
      cur[i] = cur[i] + (t[i - 1] == s[j - 1] ? pre : 0)
      pre = temp
    }
  }
  return cur[m]
}

// another

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function(s, t) {
  const m = t.length,
    n = s.length
  const dp = new Array(m + 1).fill(0)
  dp[0] = 1
  for (let j = 1; j <= n; j++) {
    for (let i = m; i > 0; i--) {
      dp[i] = dp[i] + (t[i - 1] == s[j - 1] ? dp[i - 1] : 0)
    }
  }
  return dp[m]
}

