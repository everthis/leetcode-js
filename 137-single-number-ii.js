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

// another
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums)=> {
    // Initialize result
    let result = 0;
    let x, sum;
    const n = nums.length
    // Iterate through every bit
    for (let i = 0; i < 32; i++) {
      // Find sum of set bits at ith position in all
      // array elements
      sum = 0;
      x = (1 << i);
      for (let j = 0; j < n; j++ ) {
          if (nums[j] & x) sum++;
      }
      // The bits with sum not multiple of 3, are the
      // bits of element with single occurrence.
      if (sum % 3) result |= x;
    }
    return result;
}
