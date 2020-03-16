/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
const findRotateSteps = function(ring, key) {
  function findLeft(i, j) {
    let k = i
    let count = 0
    while (ring[k] !== key[j]) {
      k--
      count++
      if (k === -1) k += ring.length
    }
    return [k, count]
  }
  function findRight(i, j) {
    let k = i
    let count = 0
    while (ring[k] !== key[j]) {
      k++
      count++
      if (k === ring.length) k -= ring.length
    }
    return [k, count]
  }
  const dp = []
  for (let i = 0; i < ring.length; i++) {
    dp[i] = []
  }
  function f(i, j) {
    if (dp[i][j] !== undefined) return dp[i][j]
    if (j === key.length) return (dp[i][j] = 0)
    const [i1, c1] = findLeft(i, j)
    const [i2, c2] = findRight(i, j)
    return (dp[i][j] = Math.min(c1 + 1 + f(i1, j + 1), c2 + 1 + f(i2, j + 1)))
  }
  return f(0, 0)
}
