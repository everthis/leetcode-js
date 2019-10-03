/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  const arr = new Array(n + 1).fill(0)
  arr[0] = arr[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[j - 1] * arr[i - j]
    }
  }
  return arr[n]
}

// another

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
