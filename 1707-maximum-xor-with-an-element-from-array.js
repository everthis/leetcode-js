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
