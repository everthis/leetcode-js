/**
 * @param {string} s
 * @return {number}
 */
const strangePrinter = function(s) {
  // optimize
  const arr = s.split('')
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] === arr[i - 1]) arr[i - 1] = ''
  }
  s = arr.join('')
  let n = s.length
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

  const help = (s, i, j) => {
    if (i > j) return 0
    if (dp[i][j] > 0) {
      return dp[i][j]
    }
    let res = help(s, i, j - 1) + 1
    for (let k = i; k < j; k++) {
      if (s[k] === s[j]) {
        res = Math.min(help(s, i, k) + help(s, k + 1, j - 1), res)
      }
    }
    dp[i][j] = res
    return res
  }

  return help(s, 0, n - 1)
}
