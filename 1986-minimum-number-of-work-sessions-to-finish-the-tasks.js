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
