/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximizeXor = function(nums, queries) {
  nums.sort((a, b) => a - b)
  queries.forEach((e, i) => e.push(i))
  queries.sort((a, b) => a[1] - b[1])
  const n = nums.length
  let idx = 0
  const res = []
  const root = [null, null]
  for(const [x, m, qi] of queries) {
    while(idx < n && nums[idx] <= m) {
      let cur = root, val = nums[idx]
      for(let i = 29; i >= 0; i--) {
        const tmp = (val >> i) & 1
        if(cur[tmp] == null) cur[tmp] = [null, null]
        cur = cur[tmp]
      }
      idx++
    }
    if(idx === 0) {
      res[qi] = -1
      continue
    }
    
    let tmp = 0, cur = root
    for(let i = 29; i >= 0; i--) {
      const val = 1 - ((x >> i) & 1)
      if(cur[val] != null) {
        tmp = tmp * 2 + 1
        cur = cur[val]
      } else {
        tmp = tmp * 2
        cur = cur[1 - val]
      }
    }
    res[qi] = tmp
  }

  return res
};

// another

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximizeXor = function (nums, queries) {
  nums.sort((a, b) => a - b)
  const numOfBits = 1 + Math.floor(Math.log2(nums[nums.length - 1]))
  const maxMask = (1 << numOfBits) - 1
  return queries.map(([x, m]) => query(x, m))
  function query(x, m) {
    if (m < nums[0]) return -1
    let l = 0,
      r = nums.length
    while (l < r) {
      let mid = l + ((r - l) >> 1)
      if (m < nums[mid])r = mid
      else l = mid + 1
    }
    r--
    l = 0
    let ans = x & ~maxMask
    for (let bit = numOfBits - 1; bit >= 0; bit--) {
      const mask = 1 << bit
      if (x & mask) {
        if ((nums[l] & mask) === 0) {
          ans |= 1 << bit
          r = search(l, r, mask) - 1
        }
      } else {
        if (nums[r] & mask) {
          ans |= 1 << bit
          l = search(l, r, mask)
        }
      }
    }
    return ans
  }
  function search(l, r, mask) {
    while (l <= r) {
      const m = l + ((r - l) >> 1)
      if ((nums[m] & mask) === 0) l = m + 1 
      else r = m - 1
    }
    return l
  }
}


// another

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximizeXor = function (nums, queries) {
  const n = queries.length
  const result = new Array(n)
  const trie = [null, null]
  for (let num of nums) {
    let node = trie
    for (let i = 30; i >= 0; i--) {
      const b = 1 << i
      if (b & num) {
        if (!node[1]) node[1] = [null, null]
        node = node[1]
      } else {
        if (!node[0]) node[0] = [null, null]
        node = node[0]
      }
    }
  }
  const min = Math.min(...nums)
  const dfs = (node, num, i, val, max) => {
    if (!node || val > max) return -1
    if (i === -1) return val
    const bit = 1 << i
    i--
    if (bit > max) return dfs(node[0], num, i, val, max)
    if (num & bit) {
      let x = dfs(node[0], num, i, val, max)
      if (x > -1) return x
      return dfs(node[1], num, i, val | bit, max)
    } else {
      let y = dfs(node[1], num, i, val | bit, max)
      if (y > -1) return y
      return dfs(node[0], num, i, val, max)
    }
  }

  for (let i = 0; i < n; i++) {
    const [num, max] = queries[i]
    if (max < min) {
      result[i] = -1
      continue
    }
    result[i] = dfs(trie, num, 30, 0, max) ^ num
  }
  return result
}

// another
// though not enough memory, this method still provides a method to solve this kind of problem

class Trie {
  constructor() {
    this.next = Array(2).fill(null)
  }
}
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximizeXor = function(nums, queries) {
  nums.sort((a, b) => a - b)
  queries.forEach((e, i) => e.push(i))
  queries.sort((a, b) => a[1] - b[1])
  const n = nums.length
  let idx = 0
  const res = []
  const root = new Trie()
  for(const [x, m, qi] of queries) {
    
    while(idx < n && nums[idx] <= m) {
      let cur = root, val = nums[idx]
      for(let i = 29; i >= 0; i--) {
        const tmp = (val >> i) & 1
        if(cur.next[tmp] == null) cur.next[tmp] = new Trie()
        cur = cur.next[tmp]
      }
      idx++
    }
    if(idx === 0) {
      res[qi] = -1
      continue
    }
    
    let tmp = 0, cur = root
    for(let i = 29; i >= 0; i--) {
      const val = 1 - ((x >> i) & 1)
      if(cur.next[val] != null) {
        tmp = tmp * 2 + 1
        cur = cur.next[val]
      } else {
        tmp = tmp * 2
        cur = cur.next[1 - val]
      }

    }
    
    res[qi] = tmp
  }
  return res
};
