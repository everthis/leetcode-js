/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
  const res = new Array(k).fill(0)
  let start = -1
  let idx = 0
  for (let i = k; i > 0; i--) {
    let min = Number.MAX_VALUE
    for (let j = start + 1; j < nums.length - i + 1; j++) {
      if (nums[j] < min) {
        start = j
        min = nums[j]
      }
    }
    res[idx++] = min
  }
  return res
}
