/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = function(nums) {
  let res = 0, n = nums.length
  const cnt = Array(n).fill(0)
  
  for(let j = 0; j < n; j++) {
    let preSmall = 0
    for(let i = 0; i < j; i++) {
      if(nums[i] < nums[j]) {
        preSmall++
        res += cnt[i]
      } else if(nums[j] < nums[i]) {
        cnt[i] += preSmall
      }
    }
  }
  
  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = function(nums) {
  const B = new Array(nums.length + 1).fill(0);
  let quadruplets = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let countSmaller = 0;

    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        countSmaller += 1;
        quadruplets += B[nums[j]];
      } else {
	    // countSmaller is all the As nums[j] is the B, nums[i] is C
		  // so nums[j] is apart of countSmaller A-B-C relationships with nums[i]
        B[nums[j]] += countSmaller;
      }
    }
  }

  return quadruplets
};
