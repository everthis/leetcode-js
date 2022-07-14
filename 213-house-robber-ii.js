/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length < 3) return Math.max(...nums)
  
    const startFromFirst = [0,nums[0]]
    const startFromSecond = [0,0]
    
    for(let i = 2; i <= nums.length; i++) {
      startFromFirst[i] = Math.max(startFromFirst[i - 1], startFromFirst[i - 2] + nums[i - 1])
      startFromSecond[i] = Math.max(startFromSecond[i - 1], startFromSecond[i - 2] + nums[i - 1])
    }
    
    return Math.max(startFromFirst[nums.length - 1], startFromSecond[nums.length])
  
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  if(nums.length === 1) return nums[0]
  return Math.max(helper(0, nums.length - 2), helper(1, nums.length - 1))

  function helper(l, r) {
    let inc = 0, exc = 0
    for(let i = l; i <= r; i++) {
      const pi = inc, pe = exc
      inc = exc + nums[i]
      exc = Math.max(pi, pe)
    }
    return Math.max(inc, exc)
  }
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  const n = nums.length
  nums = nums.concat(nums)
  let res = 0
  for(let i = 0; i < n; i++) {
    let tmp = nums[i]
    let pp = 0
    let p = 0
    for(let j = i; j < n + i - 1; j++) {
      tmp = Math.max(tmp, pp + nums[j], p);
      [pp, p] = [p, tmp]
    }
    res = Math.max(res, tmp)
  }
  
  return res
};
