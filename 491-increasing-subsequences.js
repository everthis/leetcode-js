/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
  const res = []
  helper([], 0, nums, res)
  return res
}

function helper(list, index, nums, res) {
  if (list.length > 1) {
    res.push(Array.prototype.slice.call(list, 0))
  }
  const used = []
  for (let i = index; i < nums.length; i++) {
    if (used.indexOf(nums[i]) !== -1) {
      continue
    }
    if (list.length === 0 || nums[i] >= list[list.length - 1]) {
      used.push(nums[i])
      list.push(nums[i])
      helper(list, i + 1, nums, res)
      list.pop()
    }
  }
}
