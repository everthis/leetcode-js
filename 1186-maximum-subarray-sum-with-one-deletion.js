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
