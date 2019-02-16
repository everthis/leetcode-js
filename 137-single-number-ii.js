/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const hash = {}
    
    nums.forEach(el => {
      hash[el] = (hash[el] && hash[el] + 1) || 1
    })
    
    for(let el in hash) {
      if(hash[el] === 1) return +el
    }
};
