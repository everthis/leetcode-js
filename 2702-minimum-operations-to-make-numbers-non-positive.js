/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const minOperations = function (nums, x, y) {
  const { max, floor } = Math
  let right = nums[0]
  for (const v of nums) {
    right = Math.max(v, right)
  }
  let left = 1
  right = floor(right / y) + 1
  x -= y
  while (left <= right) {
    let mid = (left + right) >> 1,
      s = mid
    for (let v of nums) {
      let t = floor((v + y - 1) / y)
      if (mid >= t) {
        continue
      }
      s -= floor((v - mid * y + x - 1) / x)
      if (s < 0) {
        break
      }
    }
    if (s >= 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right + 1
}
