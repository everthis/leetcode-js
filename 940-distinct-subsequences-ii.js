/**
 * @param {string} s
 * @return {number}
 */
const distinctSubseqII = function(s) {
  const n = s.length,
    dp = Array(26).fill(0),
    a = 'a'.charCodeAt(0),
    mod = 1e9 + 7
  let res = 0
  for(let ch of s) {
    const idx = ch.charCodeAt(0) - a
    let tmp = 0
    for(let i = 0; i < 26; i++) tmp = (tmp + dp[i]) % mod
    tmp = (tmp + 1) % mod
    dp[idx] = tmp
  }
  return dp.reduce((ac, e) => (ac + e) % mod, 0)
};

// another

/**
 * @param {string} S
 * @return {number}
 */
const distinctSubseqII = function(S) {
  // let end = new Array(26).fill(0), res = 0, added = 0, mod = 10 ** 9 + 7;
  // const aCode = ('a').charCodeAt(0)
  // for (let c of S) {
  //     added = (res + 1 - end[c.charCodeAt(0) - aCode]) % mod;
  //     res = (res + added) % mod;
  //     end[c.charCodeAt(0) - aCode] = (end[c.charCodeAt(0) - aCode] + added) % mod;
  // }
  // return (res + mod) % mod;
  const m = new Map(),
    dp = [1],
    M = 1000000007
  for (let i = 0; i < S.length; i++) {
    const c = S.charAt(i)
    let prev = 0
    if (m.has(c)) {
      prev = dp[m.get(c)]
    }
    m.set(c, i)
    dp.push((((dp[i] * 2) % M) - prev) % M)
    if (dp[i + 1] < 0) {
      dp[i + 1] += M
    }
  }
  return dp[S.length] - 1
}
