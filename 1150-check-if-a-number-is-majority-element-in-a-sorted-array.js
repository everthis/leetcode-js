/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function isMajorityElement(nums, target) {
  let firstIdx = bs(nums, target)
  let endIdx = firstIdx + (~~(nums.length / 2))
  if(endIdx < nums.length && nums[endIdx] === target) return true
  return false
}

function bs(arr, target) {
  let l = 0, h = arr.length - 1
  while(l < h) {
    const mid = l + ((h - l) >> 1)
    if (arr[mid] < target) l = mid + 1
    else h = mid
  }
  return l
}
