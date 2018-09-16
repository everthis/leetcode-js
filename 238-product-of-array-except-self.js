/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  let zeroIdxArr = [];
  const p = nums.reduce((ac, el, idx) => {
    if (el === 0) {
      zeroIdxArr.push(idx);
      return ac;
    } else {
      return ac * el;
    }
  }, 1);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (zeroIdxArr.length > 1) {
      res.push(0);
    } else if (zeroIdxArr.length === 1) {
      res.push(i === zeroIdxArr[0] ? p : 0);
    } else {
      res.push(p / nums[i]);
    }
  }
  return res;
};
