/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
  let n = nums.length,  res = new Array(n).fill(-1);
  const s1 = [], s2 = [], tmp = [];
  for (let i = 0; i < n; i++) {
    while (s2.length && nums[s2.at(-1)] < nums[i]) res[s2.pop()] = nums[i];
    while (s1.length && nums[s1.at(-1)] < nums[i]) tmp.push(s1.pop());
    while (tmp.length) s2.push(tmp.pop());
    s1.push(i);
  }
  return res;
};
