/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
  let sum = Infinity
  for (let i = l; i <= r; i++) {
    sum = Math.min(minPos(nums, i), sum)
  }
  return sum === Infinity ? -1 : sum
}

function minPos(num, k) {
  let s = 0
  let min = Infinity
  for (let i = 0; i < k; i++) {
    s += num[i]
  }
  if (s > 0) min = s
  for (let i = k; i < num.length; i++) {
    s += num[i] - num[i - k]
    if (s > 0) min = Math.min(min, s)
  }
  return min
}
