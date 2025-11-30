/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countElements = function(nums, k) {
    nums.sort((a, b) => a - b)
  let res = 0
  const n = nums.length
  for(let i = 0; i < nums.length; i++) {
    const idx = bisectRight(nums, nums[i])
    const gn = n - idx
    if(gn >= k) res++
  }


  return res
};

function bisectRight(arr, x) {
  let lo = 0, hi = arr.length

  while(lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    if(x < arr[mid]) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo
}
