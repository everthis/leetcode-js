/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = function(s) {
  const len = s.length
  const dp = Array(len + 1).fill(0)
  let bcount = 0
  for(let i = 1; i <= len; i++) {
    if(s[i - 1] === 'a') {
      dp[i] = Math.min(dp[i - 1] + 1, bcount)
    } else {
      dp[i] = dp[i - 1]
      bcount++
    }
  }
  
  return dp[len]
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = function(s) {
  const len = s.length
  const stack = []
  let res = 0
  for(let i = 0; i < len; i++) {
    if(stack.length && stack[stack.length - 1] > s[i]) {
      res++
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return res
};
