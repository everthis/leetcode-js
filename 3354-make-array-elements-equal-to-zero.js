/**
 * @param {number[]} nums
 * @return {number}
 */
const countValidSelections = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (canZeroOut(i, -1)) {
        res += 1
      }
      if (canZeroOut(i, 1)) {
        res += 1
      }
    }
  }
  return res
  function canZeroOut(start, direction) {
    let tempNums = nums.slice()
    let curr = start

    while (curr >= 0 && curr < tempNums.length) {
      if (tempNums[curr] === 0) {
        curr += direction
      } else {
        tempNums[curr] -= 1
        direction *= -1
        curr += direction
      }
    }
    return tempNums.every((x) => x === 0)
  }
}
