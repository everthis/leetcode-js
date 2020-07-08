/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
const maxJumps = function (arr, d, res = 1) {
  const dp = Array(1001).fill(0)
  for (let i = 0, len = arr.length; i < len; ++i)
    res = Math.max(res, dfs(arr, i, d))
  return res

  function dfs(arr, i, d, res = 1) {
    if (dp[i]) return dp[i]
    for (
      let j = i + 1;
      j <= Math.min(i + d, arr.length - 1) && arr[j] < arr[i];
      ++j
    )
      res = Math.max(res, 1 + dfs(arr, j, d))
    for (let j = i - 1; j >= Math.max(0, i - d) && arr[j] < arr[i]; --j)
      res = Math.max(res, 1 + dfs(arr, j, d))
    return (dp[i] = res)
  }
}


// another

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
const maxJumps = function (arr, d) {
  const cache = new Array(arr.length)
  const diffs = [1, -1]
  const dfs = (i) => {
    if (cache[i]) return cache[i]
    let max = 0
    for (let diff of diffs) {
      for (let j = diff; Math.abs(j) <= d; j += diff) {
        const nextPosition = i + j
        const isValidJump =
          nextPosition >= 0 &&
          nextPosition < arr.length &&
          arr[i] > arr[nextPosition]
        if (isValidJump) max = Math.max(max, dfs(nextPosition))
        else break
      }
    }
    const result = max + 1
    cache[i] = result
    return result
  }
  for (let i = 0; i < arr.length; i++) dfs(i)
  return Math.max(...cache)
}
