/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = function(arr) {
  const n = arr.length
  let d1 = arr[0],
    d2 = arr[0],
    best = arr[0]
  for (let i = 1; i < n; ++i) {
    d2 = Math.max(d2 + arr[i], Math.max(d1, arr[i]))
    d1 = Math.max(d1 + arr[i], arr[i])
    best = Math.max(d2, best)
  }
  return best
}

// another

/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = function (arr) {
  const n = arr.length
  let max = arr[0]
  const maxEndAt = Array(n), maxStartAt = Array(n)
  maxEndAt[0] = arr[0]
  for(let i = 1; i < n; i++) {
    maxEndAt[i] = Math.max(arr[i], maxEndAt[i - 1] + arr[i])
    max = Math.max(max, maxEndAt[i])
  }
  maxStartAt[n - 1] = arr[n - 1]
  for(let i = n - 2; i >= 0; i--) {
    maxStartAt[i] = Math.max(arr[i], maxStartAt[i + 1] + arr[i])
  }
  let res = Math.max(maxStartAt[0], maxEndAt[n - 1])
  for(let i = 1; i < n - 1; i++) {
    res = Math.max(max, res, maxEndAt[i - 1] + maxStartAt[i + 1])
  }
  return res
}
