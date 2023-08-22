/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distance = function(nums) {
   const res = []
   const hash = {}, n = nums.length
   for(let i = 0; i < n; i++) {
     const e = nums[i]
     if(hash[e] == null) hash[e] = []
     hash[e].push(i)
   }
  
   for(const [_, arr] of Object.entries(hash)) {
     helper(arr)
   }
   
   return res

  function helper(arr) {
    let sum = 0
    const len = arr.length
    for(let i = 1; i < len; i++) {
      sum += arr[i] - arr[0]
    }
    const first = arr[0]
    res[first] = sum
    for(let i = 1; i < len; i++) {
      const preIdx = arr[i - 1]
      const pre = res[preIdx], diff = arr[i] - arr[i - 1]
      const val = pre + i * diff - diff * (len - i)
      res[arr[i]] = val
    }
  }
};

// another

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distance = function(nums) {
  const n = nums.length
  const res = Array(n).fill(0)
  const hash = {}
  for(let i = 0; i < n; i++) {
    const e = nums[i]
    if(hash[e] == null) hash[e] = []
    hash[e].push(i)
  }
  
  const keys = Object.keys(hash)
  for(const k of keys) {
    const arr = hash[k]
    const totalSum = arr.reduce((ac, e) => ac + e, 0)
    let preSum = 0
    if(arr.length < 2) continue
    for(let i = 0, len =  arr.length; i < len; i++) {
      const idx = arr[i]
      const postSum =  totalSum - (preSum + idx)
      
      res[idx] += idx * i
      res[idx] -= preSum
      res[idx] -= idx * (len - 1 - i)
      res[idx] += postSum
      
      preSum += idx
    }
  }
  
  
  return res
};
