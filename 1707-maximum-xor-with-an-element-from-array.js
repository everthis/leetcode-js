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
    r -= 1
    l = 0
    let ans = x & ~maxMask
    for (let bit = numOfBits - 1; bit >= 0; bit -= 1) {
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
