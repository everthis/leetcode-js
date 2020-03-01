/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = function(nums) {
  if (nums == null || nums.length < 4) return false
  const sum = nums.reduce((ac, el) => ac + el, 0)
  if (sum % 4 !== 0) return false
  nums.sort((a, b) => b - a)
  return dfs(nums, new Array(4).fill(0), 0, sum / 4)
}

function dfs(nums, arr, idx, target) {
  if (idx === nums.length) {
    return true
  }
  for (let i = 0; i < 4; i++) {
    if (arr[i] + nums[idx] > target || (i > 0 && arr[i] === arr[i - 1]))
      continue
    arr[i] += nums[idx]
    if (dfs(nums, arr, idx + 1, target)) return true
    arr[i] -= nums[idx]
  }
  return false
}



// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = function(nums) {
  if (nums.length == 0) return false
  const edge = nums.reduce((accum, val) => accum + val) / 4
  nums.sort((val1, val2) => val2 - val1)
  if (edge !== Math.floor(edge)) return false
  const findEdge = function(target) {
    if (target <= 0) return target === 0
    let newNums = []
    while (nums.length) {
      let item = nums.shift()
      if (findEdge(target - item)) {
        nums = newNums.concat(nums)
        return true
      }
      newNums.push(item)
    }
    nums = newNums
    return false
  }
  let count = 4
  while (count) {
    if (!findEdge(edge)) return false
    count--
  }
  return true
}

