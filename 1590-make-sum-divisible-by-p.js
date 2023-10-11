/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function(nums, p) {
  const sum = nums.reduce((ac, e) => ac+ e,0)
  const target = sum % p, n = nums.length, {min} = Math
  if(target === 0) return 0
  const map = new Map()
  map.set(0, -1)
  let res = n
  for(let i = 0, s = 0; i < n; i++) {
      s += nums[i]
      const r = s % p

      if(r >= target) {
          if(map.has(r - target)) res = min(res, i - map.get(r-target))
      }else {
          if(map.has(p + r - target)) res = min(res, i - map.get(p + r - target))
      }
      map.set(r, i)
  }
  
  return res === n ? -1 : res
};

// another


/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function(nums, p) {
  const remain = nums.reduce((ac, e) => ac + e, 0) % p
  const n = nums.length, hash = {0: -1}
  let res = n
  if(remain === 0) return 0
  for(let i = 0, sum = 0; i < n; i++) {
    const cur = nums[i]
    sum += cur
    const target = (sum % p - remain + p) % p
    if(hash[target] != null) {
      res = Math.min(res, i - hash[target])
    }

    hash[sum % p] = i
  }
//   console.log(hash)
  
  return res === n ? -1 : res
};

// another

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function(nums, p) {
  const diff = nums.reduce((a, b) => a + b, 0) % p;
  let res = diff === 0 ? 0 : nums.length;
  
  for (let i = 0, sum = 0, map = {0: -1}; i < nums.length; i++) {
    sum += nums[i];
    const target = (sum % p - diff + p) % p;
    if (map[target] !== undefined) {
      res = Math.min(res, i - map[target]);
    }
    map[sum % p] = i;
  }
  
  return res === nums.length ? -1 : res;
};

/**

Let pre[] be the prefix sum array,
then pre[i] is running prefix sum or prefix sum of i elements,
pre[j] is the prefix sum such that pre[i]-pre[j] is the subarray we
need to remove to make pre[n] (sum of all elements) divisible by p

(pre[n] - (pre[i]-pre[j])) % p = 0 ... (remove a subarray to make pre[n] divisible by p)
=> pre[n] % p = (pre[i]-pre[j]) % p ... ((a-b)%m = a%m - b%m)
=> pre[j]%p = pre[i]%p - pre[n]%p ... (same property used above)
since RHS can be negative we make it positive modulus by adding p and taking modulus
=> pre[j]%p = (pre[i]%p - pre[n]%p + p) % p

*/
