/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function(nums) {
  const numIndexMapping = {}
  for (let index = 0; index < nums.length; ++index) {
    numIndexMapping[nums[index]] = index
  }
  let rank = nums.length
  for (let num in numIndexMapping) {
    const index = numIndexMapping[num]
    if (3 < rank) {
      nums[index] = '' + rank
    } else if (3 == rank) {
      nums[index] = 'Bronze Medal'
    } else if (2 == rank) {
      nums[index] = 'Silver Medal'
    } else {
      nums[index] = 'Gold Medal'
    }
    --rank
  }

  return nums
}
