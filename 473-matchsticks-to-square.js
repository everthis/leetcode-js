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
