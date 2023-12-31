/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
const countPalindromePaths = function (parent, s) {
  let n = parent.length
  let dp = Array(n).fill(undefined)
  dp[0] = 0

  function getDp(x) {
    if (dp[x] != undefined) return dp[x]
    dp[x] = getDp(parent[x]) ^ getMask(s[x])
    return dp[x]
  }

  for (let i = 1; i < n; i++) getDp(i)
  dp.sort((a, b) => a - b)
  let counter = {}
  let res = 0

  for (let i = 0; i <= n; i++) {
    if (counter[dp[i]]) counter[dp[i]]++
    else {
      counter[dp[i]] = 1

      if (i) {
        let temp = dp[i - 1]
        let cntPrev = counter[temp]
        let c = 0

        while (temp) {
          let b = temp & -temp
          c += counter[dp[i - 1] ^ b] ?? 0
          temp ^= b
        }

        res += c * cntPrev + (cntPrev * (cntPrev - 1)) / 2
      }
    }
  }

  return res
}
function getMask(c) {
  return 1 << (c.charCodeAt() - 97)
}
