/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findPrefixScore = function(nums) {
  let pre = [];
  let m = 0, s = 0;
  for(let x of nums) {
      m = Math.max(m, x);
      s += x + m;
      pre.push(s);
  }
  return pre;
};
