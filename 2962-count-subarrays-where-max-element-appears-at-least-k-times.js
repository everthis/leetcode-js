/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = function (nums, k) {
  const n = nums.length
  const t = Math.max(...nums)
  let i = 0,
    num = 0, res = 0
  for (let j = 0; j < n; j++) {
    const e = nums[j]
    if (e === t) {
      num++
      while(num >= k) {
        if(nums[i] === t) num--
        i++
        res += n - j
      }
    }
  }

  return res
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = function (nums, k) {
    const n = nums.length
    const t = Math.max(...nums)
    const cnt = {0: -1}
    let i = 0, num = 0
    for(let j = 0; j < n; j++) {
      const e = nums[j]
      if(e === t) {
          num++
          cnt[num] = j
      }
    }
    
    let res = 0
    // console.log(cnt)
    for(let i = k; i <= num; i++) {
      const preLen = cnt[i - k + 1] - cnt[i - k]
      const sufLen = n - cnt[i]
      res += preLen * sufLen
    }
  
  
    return res
  }

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length
  const mx = Math.max(...nums)
  const prefix = new Array(n + 2).fill(0)
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + (nums[i - 1] === mx ? 1 : 0)
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    let l = i
    let r = n
    while (r - l > 1) {
      let mid = Math.floor((l + r) / 2)
      if (prefix[mid + 1] - prefix[i] < k) {
        l = mid
      } else {
        r = mid
      }
    }
    res += n - i
    if (l === i && k === 1 && nums[i] === mx) {
      continue
    }
    res -= l - i + 1
  }
  return res
}
