/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function (groups, nums) {
  const dp = new Array(1000).fill(0)
  const lsps = preprocess(groups)
  let cur = 0
  for (let i = 0; i < groups.length; i++) {
    if (cur >= nums.length) return false
    cur = find(nums, cur, groups[i], lsps[i])
    if (cur === -1) return false
    cur += groups[i].length
  }
  return true
  function find(nums, cur, p, lsp) {
    const n = nums.length
    dp[cur] = p[0] === nums[cur] ? 1 : 0
    if (lsp.length === 1 && dp[cur] === 1) {
      return cur
    }
    for (let i = cur + 1; i < n; i++) {
      let j = dp[i - 1]
      while (j > 0 && p[j] !== nums[i]) {
        j = lsp[j - 1]
      }
      dp[i] = j + (p[j] === nums[i])
      if (dp[i] === p.length) {
        return i - p.length + 1
      }
    }
    return -1
  }

  function preprocess(groups) {
    const rets = []
    for (let g of groups) {
      const n = g.length
      const dp = new Array(n)
      dp[0] = 0
      for (let i = 1; i < n; i++) {
        let j = dp[i - 1]
        while (j > 0 && g[j] !== g[i]) {
          j = dp[j - 1]
        }
        dp[i] = j + (g[j] === g[i] ? 1 : 0)
      }
      rets.push(dp)
    }
    return rets
  }
}

// another

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function (groups, nums) {
  const m = nums.length
  let index = 0
  for (let group of groups) {
    const n = group.length
    // Step-1 Generate LPS
    const lps = Array(n).fill(0)
    for (let i = 1; i < n; i++) {
      let j = lps[i - 1]
      while (j > 0 && group[i] !== group[j]) {
        j = lps[j - 1]
      }
      if (group[i] === group[j]) {
        j++
      }
      lps[i] = j
    }

    // Step-2 - Matching
    let j = 0
    while (index < m) {
      if (nums[index] === group[j]) {
        j++
        index++
      }
      if (j === n) break
      else if (index < m && nums[index] != group[j]) {
        if (j > 0) {
          j = lps[j - 1]
        } else {
          index++
        }
      }
    }
    if (j !== n) return false
  }
  return true
}


// another


/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function(groups, nums) {
  let gi = 0, ni = 0
  const n = groups.length, m = nums.length
  while(gi < n && ni < m) {
    const len = groups[gi].length
    let pass = true
    if(nums[ni] !== groups[gi][0]) {
      ni++
      continue
    }
    for(let i = 1; i < len; i++) {
      if(nums[ni + i] !== groups[gi][i]) {
        pass = false
        break
      }
    }
    if(pass) {
      gi++
      ni += len
    } else {
      ni++
    }
  }
  if(gi >= n) return true

  return false

};
