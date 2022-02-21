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

// another

/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
const canDistribute = function(nums, quantity) {
  const freq = {}
  for(let e of nums) freq[e] = (freq[e] || 0) + 1
  const fArr = Object.values(freq)

  const m = quantity.length, n = fArr.length
  const dp = Array.from({ length: n }, () => Array(1 << m).fill(-1))
  
  return solve(0, 0)
  
  function solve(idx, mask) {
    if(mask === (1 << m) - 1) return 1
    if(idx === n) return 0
    if(dp[idx][mask] !== -1) return dp[idx][mask]
    
    let res = solve(idx + 1, mask)
    for(let i = 0; i < (1 << m); i++) {
      if(mask !== (mask & i)) continue
      let tmp = mask
      let sum = 0
      for(let j = 0; j < m; j++) {
        if(mask & (1 << j)) continue
        if(i & (1 << j)) {
          sum += quantity[j]
          tmp |= (1 << j)
        }
      }
      if(sum <= fArr[idx]) res |= solve(idx + 1, tmp)
    }
    
    return dp[idx][mask] = res
  }
};

// another

/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
const canDistribute = function (nums, quantity) {
  const hash = {}
  for(const e of nums) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  const cnts = Object.values(hash), m = quantity.length, n = cnts.length
  const dp = Array.from({ length: n }, () => Array(1 << m).fill(null))
  
  return helper(0, 0)

  function helper(idx, mask) {
    // mask are already selected candidates
    if(mask == (1 << m) - 1) {
        return true;
    }
    if(idx == n) {
        return false;
    }
    if(dp[idx][mask] != null) {
        return dp[idx][mask];
    }
    let ans = helper(idx + 1, mask);
    
    for(let i = 1; i < (1 << m); ++i) {
        // i are potential candidates in addition to already selected ones (from mask)
        // if i == mask, we can skip as the candidate is selected already
        // if mask != (mask & i) means that this candidate does not include selected ones e.g
        // mask = 3 (i.e 2 elements 1,2 in binary) and i = 4 (the third element in binary as 4 does not include 1 & 2), there we skip
        if(mask == i || mask != (mask & i)) continue;
        let sum = 0;
        for(let j = 0; j < m; ++j) {
            // mask << ~j is just a fancy way to do: if(mask & (1 << j)) that i've learned from @Uwi and this way you don't have to use "(", ")"
            // what it does is simply pushing the jth bit to the 2^31 bit which is negative
            // thus if the jth bit is 1 then the value is less than zero and if its 0 then its greater or equal to zero
            if(mask << ~j >= 0 && i << ~j < 0) {  // check that mask does not contain the new candidate and that the candidate is part of the potential candidate i
                sum += quantity[j];
            }
        }
        if(sum <= cnts[idx]) {
            ans |= helper(idx + 1, i);
        }
        if(ans) break; // if ans is true, then a solution exists and no further computation is required
    }
    dp[idx][mask] = ans;
    return ans;
  }
}
