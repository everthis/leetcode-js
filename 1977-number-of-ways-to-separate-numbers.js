/**
 * @param {string} num
 * @return {number}
 */
function numberOfCombinations(num) {
  let dpArr = Array(3501).fill(0),
    dp = Array(3501).fill(0),
    prefix = Array(3501).fill(0),
    n = num.length,
    mod = 1e9 + 7
  for (let l = 1; l <= n; ++l) {
    dp[0] = 1
    for (let i = n; i - l > 0; --i)
      prefix[i - 1] = num[i - 1 - l] === num[i - 1] ? prefix[i] + 1 : 0
    for (let i = 0; i < n; ++i) {
      dpArr[i + 1] = dp[i + 1]
      if (l <= i + 1 && num[i + 1 - l] != '0') {
        if (
          i + 1 - 2 * l >= 0 &&
          (prefix[i + 1 - l] >= l ||
            num[i + 1 - l + prefix[i + 1 - l]] > num[i + 1 - 2 * l + prefix[i + 1 - l]])
        )
          dpArr[i + 1] = (dpArr[i + 1] + dpArr[i + 1 - l]) % mod
        else dpArr[i + 1] = (dpArr[i + 1] + dp[i + 1 - l]) % mod
      }
    }
    const tmp = dp
    dp = dpArr
    dpArr = tmp
  }
  return dp[n]
}
