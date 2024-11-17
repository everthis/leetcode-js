/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  if (nums.every((num) => num === 0)) return 0
  const n = nums.length
  const delta = new Array(n + 1).fill(0)

  for (let index = 0; index < queries.length; index++) {
    const query = queries[index]
    const l = query[0]
    const r = query[1]
    const diff = query[2]

    delta[l] += diff
    if (r + 1 < n) {
      delta[r + 1] -= diff
    }

    let curDiff = 0
    let success = true

    for (let i = 0; i < n; i++) {
      curDiff += delta[i]
      if (nums[i] > curDiff) {
        success = false
        break
      }
    }

    if (!success) continue
    return index + 1
  }
  return -1
}
