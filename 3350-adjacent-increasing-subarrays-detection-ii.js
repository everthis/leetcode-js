/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
  const n = nums.length
  let up = 1, preMaxUp = 0, res = 0

  for(let i = 1; i < n; i++) {
    if(nums[i] > nums[i - 1]) up++
    else {
        preMaxUp = up
        up = 1
    }
    res = Math.max(res, Math.max(~~(up / 2), Math.min(preMaxUp, up)))
  }


  return res
}


// another

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
  const n = nums.length

  const increasingRun = new Array(n).fill(1)
  for (let i = n - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      increasingRun[i] = increasingRun[i + 1] + 1
    }
  }

  let left = 1,
    right = Math.floor(n / 2)
  let res = 0

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    let found = false

    for (let i = 0; i <= n - 2 * mid; ++i) {
      if (increasingRun[i] >= mid && increasingRun[i + mid] >= mid) {
        found = true
        break
      }
    }

    if (found) {
      res = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return res
}
