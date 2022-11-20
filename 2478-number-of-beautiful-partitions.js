/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
const beautifulPartitions = function (s, k, minLength) {
  const mod = 1e9 + 7
  const p = new Set(['2', '3', '5', '7'])

  function isPrime(x) {
    return p.has(x)
  }

  let n = s.length
  const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0))

  for (let j = 0; j < n; ++j) {
    dp[1][j] = isPrime(s[0]) && !isPrime(s[j])
  }
  let previous_row = Array(n).fill(0)
  for (let i = 0; i + 1 < n; ++i) {
    if (isPrime(s[i + 1])) previous_row[i] = dp[1][i] // update IFF next_index is prime and capable of starting a substring
    if (i - 1 >= 0)
      previous_row[i] = (previous_row[i] + previous_row[i - 1]) % mod
  }
  for (let i = 2; i <= k; ++i) {
    let current_row = Array(n).fill(0)
    for (let end = i * minLength - 1; end < n; ++end) {
      if (isPrime(s[end])) continue

      // optimization usage
      let prefixsum = previous_row[end - minLength]
      let start = (i - 1) * minLength - 1
      if (start - 1 >= 0)
        prefixsum = (prefixsum - previous_row[start - 1] + mod) % mod
      dp[i][end] = (dp[i][end] + prefixsum) % mod

      // update current_row's column only if the next_index is a prime and capable of starting a substring
      if (end + 1 < n && isPrime(s[end + 1]))
        current_row[end] = (current_row[end] + dp[i][end]) % mod
    }
    // re-calclate prefix sum of current row dp values for each column
    for (let c = 1; c <= n - 1; ++c) {
      current_row[c] = (current_row[c] + current_row[c - 1]) % mod
    }

    // swap previous_row dp values and current_row dp values. why ?
    // Because current row will become previous row for next row
    // swap(previous_row, current_row);
    let tmp = current_row
    current_row = previous_row
    previous_row = tmp
  }
  return dp[k][n - 1]
}
