/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumSwaps = function (nums) {
  const mi = Math.min(...nums)
  const ma = Math.max(...nums)
  let minIdx = -1, maxIdx = -1
  const n = nums.length
  for(let i = 0; i < n; i++) {
    if(nums[i] === mi) {
      minIdx = i
      break
    }
  }
  for(let i = n - 1; i >= 0; i--) {
    if(nums[i] === ma) {
      maxIdx = i
      break
    }
  }

  const num = minIdx + n - 1 - maxIdx
  return minIdx > maxIdx ? num - 1 : num
}
