/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
const minSessions = function(tasks, sessionTime) {
  const n = tasks.length
  const limit = 1 << n
  
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  for(let mask = 1; mask < limit; mask++) {
    for(let sub = mask; sub; sub = (sub - 1) & mask) {
      if(valid(sub)) {
        dp[mask] = Math.min(dp[mask], dp[mask - sub] + 1)        
      }
    }
  }
  
  return dp[limit - 1]
  
  function valid(sub) {
    let sum = 0
    for(let i = 0; i < 14; i++) {
      if((sub >> i) & 1) sum += tasks[i]
    }
    
    return sum <= sessionTime
  }
};

// another

/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
const minSessions = function(tasks, sessionTime) {
  const n = tasks.length
  const dp = Array.from({ length: 1 << 14 }, () => Array(16).fill(-1))
  return fn(0, 0)
  
  function fn(mask, consumed) {
    if (mask === (1 << n) - 1) {
      return consumed === 0 ? 0 : 1
    }
    if (dp[mask][consumed] !== -1) {
     return dp[mask][consumed];
    }

    let result = Number.MAX_VALUE;
    if (consumed > 0) {
        result = Math.min(result, 1 + fn(mask, 0));
    }
    for (let i = 0; i < n; i++) {
        if ((mask & (1 << i)) === 0 && consumed + tasks[i] <= sessionTime) {
            result = Math.min(result, fn(mask | (1 << i), consumed + tasks[i]));
        }
    }
    return dp[mask][consumed] = result;
  }
};

// another

/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
function minSessions(tasks, sessionTime) {
  const n = tasks.length
  const memo = Array.from({ length: 1 << n }, () => Array(15))
  return helper((1 << n) - 1, 0)

  function helper(mask, remain) {
    if(mask === 0) return 0
    if(memo[mask][remain] != null) return memo[mask][remain]
    let res = n
    
    for(let i = 0; i < n; i++) {
      if((1 << i) & mask) {
        const newMask = mask & (~(1 << i))
        if(tasks[i] <= remain) {
          res = Math.min(res, helper(newMask, remain - tasks[i]))
        } else {
          res = Math.min(res, helper(newMask, sessionTime - tasks[i]) + 1)
        }
      }
    }

    return memo[mask][remain] = res
  }
}
