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

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const hash = {}
  for(let n of nums) {
    if(hash[n] == null) hash[n] = 0
    hash[n]++
  }
  const entries = Object.entries(hash)
  let min = Infinity, max = -Infinity
  const reverse = {}
  for(let [k, freq] of entries) {
    if(freq < min) min = freq
    if(freq > max) max = freq
    if(reverse[freq] == null) reverse[freq] = []
    reverse[freq].push(k)
  }
  const n = max - min + 1
  const arr = Array(n)
  let res = []
  let limit = max
  while(limit) {
    if(reverse[limit]) res.push(...reverse[limit])
    limit--
    if(res.length >= k) break
  }
  res.splice(k)
  return res
};

// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const topKFrequent = function(nums, k) {
  const n = nums.length
  const freq = Array(n + 1).fill(null)
  const hash = {}
  for(let e of nums) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  for(let k in hash) {
    if(hash.hasOwnProperty(k)) {
      const v = hash[k]
      if(freq[v] == null) freq[v] = []
      freq[v].push(k)
    }
  }
  const res = []
  for(let i = n; i >= 0; i--) {
    if(freq[i] != null) res.push(...freq[i])
    if(res.length >= k) break
  }
  if(res.length > k) res.splice(k)
  return res
};
