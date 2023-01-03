/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countExcellentPairs = function(nums, k) {
  const cnt = Array(31).fill(0), set = new Set(nums)
  for(const e of set) {
    cnt[setBits(e)]++
  }
  let res = 0
  
  for(let i = 1; i < 31; i++) {
    for(let j = 1; j < 31; j++) {
      if(i + j >= k) res += cnt[i] * cnt[j]
    }
  }

  return res
  
  function setBits(num) {
    let res = 0
    while(num) {
      res += num % 2
      num = num >> 1
    }
    return res
  }
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countExcellentPairs = function(nums, k) {
  const arr = [], set = new Set(nums)
  for(const e of set) {
    arr.push(setBits(e))
  }

  arr.sort((a, b) => a - b)
  let res = 0
  for(let i = 0, n = arr.length; i < n; i++) {
    const idx = bs(arr, k - arr[i])
    res += n - idx
  }
  return res
  
  
  function bs(arr, target) {
    let l = 0, r = arr.length
    
    while(l < r) {
      const mid = (l + r) >> 1
      if(arr[mid] < target) l = mid + 1
      else r = mid
    }
    
    return l
  }
  function setBits(num) {
    let res = 0
    while(num) {
      res += num % 2
      num = num >> 1
    }
    return res
  }
};
