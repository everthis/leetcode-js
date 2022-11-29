/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
  if(nums == null || nums.length === 0) return null
  const res = []
  const hash = {}
  for(let el of nums) {
    if(hash.hasOwnProperty(el)){
      res[0] = el
    } else hash[el] = 0
    hash[el]++
  }
  for(let i = 1, len = nums.length; i <= len; i++) {
    if(!hash.hasOwnProperty(i)) {
      res[1] = i
      break
    }
  }
  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    const res = [];
    for (const i of nums) {
      if (nums[Math.abs(i) - 1] < 0) res[0] = Math.abs(i);
	  else nums[Math.abs(i) - 1] *= -1;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) res[1] = i + 1;
    }
    return res;    
};

