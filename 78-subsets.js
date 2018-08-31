/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsets(nums) {
  const list = [];
  const len = nums.length;
  const subsetNum = Math.pow(2, len);
  for (let n = 0; n < subsetNum; n++) {
    list[n] = [];
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < subsetNum; j++) {
      if ((j >> i) & 1) {
        list[j].push(nums[i]);
      }
    }
  }
  return list;
}

console.log(subsets([1, 2, 3]));
