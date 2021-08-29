/**
 * @param {string} binary
 * @return {number}
 */
const numberOfUniqueGoodSubsequences = function (binary) {
  const n = binary.length,
    P = 1e9 + 7
  let first1Position = -1,
    first0Position = -1
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0' && first0Position == -1) {
      first0Position = i
    }
    if (binary[i] === '1' && first1Position == -1) {
      first1Position = i
    }
    if(first0Position !== -1 && first1Position !== -1) break
  }
  if (first1Position === -1) return 1
  if (first0Position === -1) return n

  const next0 = new Array(n).fill(0)
  const next1 = new Array(n).fill(0)
  let nextZero = -1,
    nextOne = -1
  for (let i = binary.length - 1; i >= 0; i--) {
    next0[i] = nextZero
    next1[i] = nextOne
    if (binary[i] === '0') {
      nextZero = i
    } else {
      nextOne = i
    }
  }
  const dp = new Array(n).fill(-1)
  return (1 + fn(first1Position)) % P

  function fn(index) {
    if (index == n) return 0
    if (dp[index] !== -1) return dp[index]
    let result = 1
    if (next0[index] >= 0) {
      result += fn(next0[index])
      result %= P
    }
    if (next1[index] >= 0) {
      result += fn(next1[index])
      result %= P
    }
    return (dp[index] = result)
  }
}
