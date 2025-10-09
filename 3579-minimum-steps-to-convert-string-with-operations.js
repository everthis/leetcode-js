/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minOperations = function (word1, word2) {
  const arr1 = word1.split('')
  const arr2 = word2.split('')
  const n = arr1.length
  const dp = Array.from({ length: n }, () => Array(n).fill(null))
  const res = solve(0, 0, arr1, arr2, n, dp)
  return res
}

function solve(i, j, arr1, arr2, n, dp) {
  if (i >= n) return 0
  if (j >= n) return 100000

  if (dp[i][j] !== null) return dp[i][j]

  let dontStartSubstr = solve(i, j + 1, arr1, arr2, n, dp)
  let startSubstr =
    Math.min(
      mininumOpr(arr1, arr2, i, j, false),
      mininumOpr(arr1, arr2, i, j, true),
    ) + solve(j + 1, j + 1, arr1, arr2, n, dp)

  dp[i][j] = Math.min(startSubstr, dontStartSubstr)
  return dp[i][j]
}

function mininumOpr(arr1, arr2, i, j, isReversed) {
  let operations = isReversed ? 1 : 0
  let x = i
  let idx = isReversed ? j : i
  const mul = isReversed ? -1 : 1
  const freqOfMismatched = Array.from({ length: 26 }, () => Array(26).fill(0))

  while (x <= j) {
    if (arr1[x] !== arr2[idx]) {
      const wanted = arr1[x].charCodeAt(0) - 97
      const got = arr2[idx].charCodeAt(0) - 97
      if (freqOfMismatched[got][wanted] > 0) {
        freqOfMismatched[got][wanted]--
      } else {
        freqOfMismatched[wanted][got]++
        operations++
      }
    }
    x++
    idx += mul
  }
  return operations
}
