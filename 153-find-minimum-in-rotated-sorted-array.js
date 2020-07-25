/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let low = 0,
    high = nums.length - 1
  // loop invariant: 1. low < high
  //                 2. mid != high and thus A[mid] != A[high] (no duplicate exists)
  //                 3. minimum is between [low, high]
  // The proof that the loop will exit: after each iteration either the 'high' decreases
  // or the 'low' increases, so the interval [low, high] will always shrink.
  while (low < high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] <= nums[high]) high = mid
    else if (nums[mid] > nums[high]) low = mid + 1
  }

  return nums[low]
}
