/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findPrefixScore = function(nums) {
  const { max } = Math
  const res = []
  let ma = 0, sum = 0
  for(const e of nums) {
    ma = max(e, ma)
    sum += ma + e
    res.push(sum)
  }
  
  return res
};
