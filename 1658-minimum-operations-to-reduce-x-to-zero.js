/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function(nums, x) {
  const n = nums.length
  const sum  = nums.reduce((ac, e) => ac + e, 0)
  const target = sum - x
  if(target < 0) return -1
  if(target === 0) return n
  const map = new Map()
  map.set(0, -1)
  let res = 0
  for(let i = 0, cur = 0; i < n; i++) {
    cur += nums[i]
    if(map.has(cur - target)) {
      res = Math.max(res, i - map.get(cur - target))
    }
    
    if(!map.has(cur)) map.set(cur, i)
  }
  
  return res === 0 ? -1 : n - res
};

// another

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function(nums, x) {
  const sum = nums.reduce((ac, e) => ac + e, 0)
  const subArrSum = sum - x
  if(subArrSum === 0) return nums.length
  const n = nums.length, hash = {0: -1}
  let ac = 0, res = -1
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    ac += cur
    if(hash[ac - subArrSum] != null) {
      res = Math.max(res, i - hash[ac - subArrSum])
    }
    hash[ac] = i
  }
 
  return res === -1 ? -1 : n - res
};

// another

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  let l = 0,
    r = nums.length - 1;
  while (x >= 0 && r >= l) {
    x -= nums[r];
    r -= 1;
  }
  if (r < 0 && x > 0) {
    return -1;
  } else if (r < 0 && x == 0) {
    return nums.length;
  }

  let ans = Number.MAX_VALUE;
  while (r < nums.length) {
    while (x <= 0 && r + 1 < nums.length) {
      if (x == 0) ans = Math.min(ans, nums.length - (r - l + 1));
      x += nums[r + 1];
      r += 1;
    }
    if (r + 1 >= nums.length) {
      if (x == 0) ans = Math.min(ans, nums.length - (r - l + 1));
      break;
    }
    while (x >= 0) {
      if (x == 0) ans = Math.min(ans, nums.length - (r - l + 1));
      x -= nums[l];
      l += 1;
    }
  }
  return ans != Number.MAX_VALUE ? ans : -1;
};
