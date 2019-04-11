/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {
  nums.sort((a, b) => a - b)
  const ref = [...nums]
  let j = nums.length - 1
  for (let i = 1; i < nums.length; i += 2, j--) nums[i] = ref[j]
  for (let i = 0; i < nums.length; i += 2, j--) nums[i] = ref[j]
}
