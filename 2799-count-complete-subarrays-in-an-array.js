/**
 * @param {number[]} nums
 * @return {number}
 */
const countCompleteSubarrays = function(nums) {
  const set = new Set(nums)
  const size = set.size
  const hash = new Map()

  let res = 0, i = 0, j = 0
  const n = nums.length

  while(i < n) {
    const e = nums[i]
    hash.set(e, (hash.get(e) || 0) + 1)
    while(j <= i && size === hash.size) {
      const pre = nums[j]
      hash.set(pre, hash.get(pre) - 1)
      if(hash.get(pre) === 0) hash.delete(pre)
      res += n - i
      j++
    }
    i++
  }

  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const countCompleteSubarrays = function(nums) {
  const set = new Set(nums)
  const size = set.size

  let res = 0
  const n = nums.length

  for(let i = 0; i < n; i++) {
    const s = new Set()
    s.add(nums[i])
    for(let j = i; j < n; j++) {
      s.add(nums[j])
      if(s.size === size) res++
    }
  }
  
  return res
  
};
