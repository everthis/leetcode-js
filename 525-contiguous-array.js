/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function(nums) {
  let res = 0, sum = 0
  const hash = {0: -1}, n = nums.length
  
  for(let i = 0; i < n; i++) {
      const cur = nums[i]
      sum += cur === 0 ? -1 : 1
      if(hash[sum] != null) {
          res = Math.max(res, i - hash[sum])
      } else {
          hash[sum] = i
      }
      
  }
  
  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  const map = new Map()
  map.set(0, -1)
  let count = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num === 0) {
      count -= 1
    }
    if (num === 1) {
      count += 1
    }
    if (map.has(count)) {
      max = Math.max(max, i - map.get(count))
    } else {
      map.set(count, i)
    }
  }
  return max
}
