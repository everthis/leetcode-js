/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  nums.sort((a, b) => a - b)
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  )
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  let max1 = -Infinity
  let max2 = -Infinity
  let max3 = -Infinity
  let min1 = Infinity
  let min2 = Infinity
  for (let num of nums) {
    if (num > max1) {
      max3 = max2
      max2 = max1
      max1 = num
    } else if (num > max2) {
      max3 = max2
      max2 = num
    } else if (num > max3) {
      max3 = num
    }

    if (num < min1) {
      min2 = min1
      min1 = num
    } else if (num < min2) {
      min2 = num
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
}
