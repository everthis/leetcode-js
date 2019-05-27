/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  const len = nums.length
  if(len > 0) {
    let slow = nums[0]
    let fast = nums[nums[0]]
    while(slow !== fast) {
      slow = nums[slow]
      fast = nums[nums[fast]]
    }
    slow = 0
    while(slow !== fast) {
      slow = nums[slow]
      fast = nums[fast]
    }
    return slow
  }
  return -1;
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  let n = nums.length - 1,
    res = 0
  for (let p = 0; p < 32; ++p) {
    let bit = 1 << p,
      a = 0,
      b = 0
    for (let i = 0; i <= n; ++i) {
      if (i > 0 && (i & bit) > 0) ++a
      if ((nums[i] & bit) > 0) ++b
    }
    if (b > a) res += bit
  }
  return res
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      return nums[i];
    } else {
      hash[nums[i]] = 1;
    }
  }
};
