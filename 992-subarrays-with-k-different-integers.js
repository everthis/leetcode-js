/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = function(nums, k) {
  return mostK(k) - mostK(k - 1)
  
  function mostK(k) {
    const map = new Map(), n = nums.length
    let i = 0, j = 0, res = 0
    for(; j < n; j++) {
      const e = nums[j]
      map.set(e, (map.get(e) || 0) + 1)
      while(map.size > k) {
        const tmp = nums[i]
        map.set(tmp, map.get(tmp) - 1)
        if(map.get(tmp) === 0) map.delete(tmp)
        i++
      }
      res += j - i + 1
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
const subarraysWithKDistinct = function(nums, k) {
  return mostK(k) - mostK(k - 1)
  function mostK(limit) {
    const map = new Map()
    let i = 0, j = 0, res = 0
    const n = nums.length
    for(; j< n; j++) {
      const e = nums[j]
      map.set(e, (map.get(e) || 0) + 1)
      while(map.size > limit) {
        const tmp = nums[i]
        map.set(tmp, (map.get(tmp) || 0) - 1)
        if(map.get(tmp) === 0) map.delete(tmp)
        i++
      }
      res += j - i + 1
    }
    
    return res
  }
};

// another

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = function(A, K) {
  let res = 0
  let prefix = 0
  const m = new Array(A.length + 1).fill(0)
  for (let i = 0, j = 0, cnt = 0, len = A.length; i < len; i++) {
    if (m[A[i]]++ === 0) cnt++
    if (cnt > K) {
      m[A[j++]]--
      cnt--
      prefix = 0
    }
    while (m[A[j]] > 1) {
      prefix++
      m[A[j++]]--
    }
    if (cnt === K) res += prefix + 1
  }
  return res
}

// another

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = function (A, K) {
  return mostK(K) - mostK(K - 1)
  function mostK(num) {
    const m = {}, len = A.length
    let i = 0, j = 0, res = 0
    for(j = 0; j < len; j++) {
      if(!m[A[j]]) m[A[j]] = 0, num--
      m[A[j]]++
      while(num < 0) {
        m[A[i]]--
        if(!m[A[i]]) num++
        i++
      }
      res += j - i + 1
    }
    return res
  }
}

// another

const subarraysWithKDistinct = function (nums, k) {
  const n = nums.length
  const atMost = (k) => {
    const freq = new Array(n + 1).fill(0)
    let l = 0,
      r = 0
    let res = 0
    let cnt = 0
    while (r < n) {
      if (freq[nums[r]] === 0) {
        cnt++
      }
      freq[nums[r]]++
      while (cnt > k) {
        freq[nums[l]]--
        if (freq[nums[l]] === 0) {
          cnt--
        }
        l++
      }
      res += r - l + 1
      r++
    }
    return res
  }
  return atMost(k) - atMost(k - 1)
}


