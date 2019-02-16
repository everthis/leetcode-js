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

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums)=> {
  let one=0, two=0;
  for (let i=0; i<nums.length; i++) {
    one = (one ^ nums[i]) & ~two;
    two = (two ^ nums[i]) & ~one;
  }
  return one;
}
