/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  let n = nums.length, {abs, min, max} = Math
  let res = nums[0] + nums[1] + nums[2]
  nums.sort((a, b) => a - b)
  for(let i = 0; i < n - 2; i++) {
    let e = nums[i]
    let l = i + 1, r = n - 1
    if(i > 0 && nums[i] === nums[i - 1]) continue
    while(l < r) {
        const tmp = e + nums[l] + nums[r]
        if(abs(tmp - target) < abs(res - target)) {
           res = tmp
        }
        if(tmp > target) r--
        else if (tmp < target) l++
        else return tmp
    }
  }
  
  
  return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  const nums = nums.sort((a, b) => a - b);
  let result;
  let lo;
  let hi;
  let sum;
  result = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length - 2; i++) {
    lo = i + 1;
    hi = nums.length - 1;
    while (lo < hi) {
      sum = nums[i] + nums[lo] + nums[hi];
      if (sum < target) {
        while (lo < hi && nums[lo] === nums[lo + 1]) {
          lo += 1;
        }
        lo += 1;
      } else if (sum > target) {
        while (lo < hi && nums[hi] === nums[hi - 1]) {
          hi -= 1;
        }
        hi -= 1;
      } else {
        return sum;
      }

      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
    }
  }

  return result;
};
