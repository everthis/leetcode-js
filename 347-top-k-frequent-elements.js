/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const hash = {}
  for(let i = 0; i < nums.length; i++) {
    if(hash.hasOwnProperty(nums[i])) hash[nums[i]]++
    else hash[nums[i]] = 1
  }
  const res = new Array()
  const keys = Object.keys(hash)
  
  const bucket = new Array(nums.length)
  
  for(let k of keys) {
    let freq = hash[k]
    if(bucket[freq] == null) {
      bucket[freq] = []
    }
    bucket[freq].push(k)
  }
  
  for(let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    if(bucket[i] != null) {
      res.push(...bucket[i])
    }
  }
  
  return res
};

