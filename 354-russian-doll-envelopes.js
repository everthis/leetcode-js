/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function(envelopes) {
  const env = envelopes
  env.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  const stk = []
  for(const e of env) {
    if(stk.length === 0 || e[1] > stk[stk.length - 1][1]) {
      stk.push(e)
      continue
    }
    let l = 0, r = stk.length - 1
    while(l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if(stk[mid][1] < e[1]) l = mid + 1
      else r = mid
    }
    
    stk[l] = e
  }
  
  return stk.length
};

// another


/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })
  const n = envelopes.length
  const dp = []
  for (let i = 0; i < n; i++) {
    let l = 0,
      r = dp.length,
      t = envelopes[i][1]
    while (l < r) {
      let m = l + ~~((r - l) / 2)
      if (dp[m] < t) l = m + 1
      else r = m
    }
    if (r >= dp.length) dp.push(t)
    else dp[r] = t
  }
  return dp.length
}

// another

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  const stack = []
  for(let e of envelopes) {
    if(stack.length === 0 || e[1] > stack[stack.length - 1][1]) {
      stack.push(e)
      continue
    }
    let l = 0, r = stack.length - 1
    while(l < r) {
      const mid = ~~((l+r)/2)
      if(stack[mid][1] < e[1]) {
        l = mid + 1
      } else r = mid
    }
    stack[l] = e
  }
  return stack.length
};
