/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  const hash = {
    0: 1,
    1: 1
  }
  return doNumTrees(n, hash)
}

function doNumTrees(n, hash) {
  if (hash[n]) return hash[n]
  let sum = 0
  for (let i = 1; i <= n; i++) {
    const left = doNumTrees(i - 1, hash)
    const right = doNumTrees(n - i, hash)
    sum += left * right
  }
  hash[n] = sum
  return sum
}
