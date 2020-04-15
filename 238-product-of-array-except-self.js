/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const zeroIdx = new Set();
  const p = nums.reduce((ac, el, idx) => {
    if (el === 0) {
      zeroIdx.add(idx);
      return ac;
    } else {
      return ac * el;
    }
  }, 1);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (zeroIdx.size > 1) {
      res.push(0);
    } else if (zeroIdx.size === 1) {
      res.push(i === [...zeroIdx.values()][0] ? p : 0);
    } else {
      res.push(p / nums[i]);
    }
  }
  return res;
};

