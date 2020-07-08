/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
const maxJumps = function (arr, d) {
  const map = {}
  let max = 1
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, calc(i))
  }
  return max

  function calc(i) {
    if (map[i]) return map[i]
    let max = 1
    const left = Math.max(0, i - d)
    for (let j = i - 1; j >= left; j--) {
      if (arr[j] >= arr[i]) break
      if (arr[j] < arr[i]) max = Math.max(max, calc(j) + 1)
    }
    const right = Math.min(arr.length - 1, i + d)
    for (let j = i + 1; j <= right; j++) {
      if (arr[j] >= arr[i]) break
      if (arr[j] < arr[i]) max = Math.max(max, calc(j) + 1)
    }
    map[i] = max
    return map[i]
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
