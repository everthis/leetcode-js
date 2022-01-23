/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
  const pos = [], neg = []
  for(let e of nums) {
    if(e >= 0) pos.push(e)
    else neg.push(e)
  }
  const res = []
  for(let i = 0; i < nums.length; i++) {
    if(i % 2 === 0) res.push(pos[~~(i / 2)])
    else res.push(neg[~~(i / 2)])
  }
  return res
};
