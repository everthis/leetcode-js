/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  if (nums == null || nums.length === 0) return []
  const res = []
  if (nums.length === 1) return [`${nums[0]}`]
  let start = nums[0]
  let end = nums[0]
  let endVal = end
  for (let i = 1, len = nums.length; i < len; i++) {
    let cur = nums[i]
    if (cur - end > 1) {
      endVal = end
      insert(res, start, end)
      start = cur
      end = cur
    } else {
      end = cur
    }
  }
  if (endVal !== end) {
    insert(res, start, end)
  }
  return res
}

function insert(arr, start, end) {
  if (start === end) {
    arr.push(`${start}`)
  } else {
    arr.push(`${start}->${end}`)
  }
}
