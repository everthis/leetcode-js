/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums) {
  const res = []
  const hash = {}
  const len = nums.length
  const limit = Math.floor(len / 3)
  nums.forEach(el => {
    if(hash.hasOwnProperty(''+el)) {
       hash[el] += 1
    } else {
      hash[el] = 1
    }
  })
  Object.keys(hash).forEach(el => {
    if(hash[el] > limit) res.push(+el)
  })
  
  return res
};
