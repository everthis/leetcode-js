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
