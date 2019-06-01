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
