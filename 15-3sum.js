/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const res = [], n = nums.length
  nums.sort((a, b) => a - b)
  
  for(let i = 0; i < n; i++) {
    const target = -nums[i]
    let l = i + 1, r = n - 1
    while(l < r) {
      const sum = nums[l] + nums[r]
      if(sum > target) r--
      else if(sum < target) l++
      else {
        const e = [nums[i], nums[l], nums[r]]
        res.push(e)
        while(l + 1 < r && nums[l + 1] === nums[l]) l++
        while(r - 1 > l && nums[r - 1] === nums[r]) r--
        l++
        r--
      }
    }
    while(i + 1 < n && nums[i] === nums[i + 1]) i++
  }
  
  
  return res
};

// another


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  let lo, hi, sum
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      lo = i + 1
      hi = nums.length - 1
      sum = 0 - nums[i]
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([nums[i], nums[lo], nums[hi]])
          while (lo < hi && nums[lo] === nums[lo + 1]) lo += 1
          while (lo < hi && nums[hi] === nums[hi - 1]) hi -= 1
          lo += 1
          hi -= 1
        } else if (nums[lo] + nums[hi] < sum) lo++
        else hi--
      }
    }
  }
  return res
}

// another

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const res = [], n = nums.length
  nums.sort((a, b) => a - b)
  for(let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1, target = -nums[i]
    if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      while(l < r) {
        if(nums[l] + nums[r] === target) {
          res.push([nums[i], nums[l], nums[r]])
          while(l < n - 1 && nums[l] === nums[l + 1]) l++
          while(r > 0 && nums[r] === nums[r - 1]) r--
          r--
          l++
        } else if(nums[l] + nums[r] > target) {
          r--
        } else l++
      }
    }
  }  

  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let res = []
  for(let i = 0; i < n - 2; i++) {
      const e = nums[i], target = -e
      let l = i + 1, r = n - 1
      while(l < r) {
          const tmp = nums[l] + nums[r]
          if(tmp < target) l++
          else if(tmp > target) r--
          else {
              res.push([nums[i], nums[l], nums[r]])
              l++
              r--
              while(l < r && nums[l] === nums[l - 1]) l++
              while(l < r && nums[r] === nums[r + 1]) r--
          }
      }
      while(i + 1 < n && nums[i + 1] === e) i++
  }
  
  
  return res
};
