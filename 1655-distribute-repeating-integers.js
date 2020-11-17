/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
const canDistribute = function (nums, quantity) {
  const mp = {}
  for (let x of nums) {
    mp[x] = (mp[x] || 0) + 1
  }
  const values = Object.values(mp)
  quantity.sort((a, b) => b - a)
  let res = false
  dfs(0)
  return res

  function dfs(idx) {
    if(idx === quantity.length || res) {
      res = true
      return
    }
    for(let i = 0, len = values.length; i < len; i++) {
      if(values[i] >= quantity[idx]) {
        values[i] -= quantity[idx]
        dfs(idx + 1)
        values[i] += quantity[idx]
      }
    }
  }
}

// another

/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
const canDistribute = function (nums, quantity) {
  const mp = {}
  for (let x of nums) {
    mp[x] = (mp[x] || 0) + 1
  }
  const a = []
  for (let p in mp) a.push(mp[p])
  const b = quantity
  const m = quantity.length
  const n = a.length
  const dp = Array.from({ length: n }, () => Array(1 << m).fill(-1))
  return solve(0, 0)

  function solve(idx, mask) {
    if (mask === (1 << m) - 1) return 1
    if (idx === n) return 0
    if (dp[idx][mask] !== -1) return dp[idx][mask]
    let ans = solve(idx + 1, mask)
    for (let i = 0, up = 1 << m; i < up; i++) {
      if (mask !== (mask & i)) continue
      let nm = mask
      let sum = 0
      for (let j = 0; j < m; j++) {
        if (mask & (1 << j)) continue
        if (i & (1 << j)) {
          sum += b[j]
          nm |= 1 << j
        }
      }
      if (sum <= a[idx]) ans |= solve(idx + 1, nm)
    }
    return (dp[idx][mask] = ans)
  }
}
