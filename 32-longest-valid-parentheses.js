/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
  const arr = s.split("")
  const dp = new Array(arr.length).fill(0)
  let open = 0
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") open++
    if (arr[i] === ")" && open > 0) {
      dp[i] = 2 + dp[i - 1]
      if (i - dp[i] > 0) dp[i] += dp[i - dp[i]]
      open--
    }
    if (dp[i] > max) max = dp[i]
  }
  return max
}

// another

const longestValidParentheses = function(s) {
  let longest = 0
  let stack = [-1]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i)
    } else {
      stack.pop()
      if (!stack.length) stack.push(i)
      else longest = Math.max(longest, i - stack[stack.length - 1])
    }
  }

  return longest
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let res = 0,
    stk = [],
    n = s.length,
    idxStk = []
  for (let i = 0; i < n; i++) {
    const ch = s[i]
    if (stk.length && stk[stk.length - 1] === '(' && ch === ')')
      stk.pop(), idxStk.pop()
    else stk.push(ch), idxStk.push(i)
    res = Math.max(res, i - (idxStk.length ? idxStk[idxStk.length - 1] : -1))
  }
  return res
}
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let res = 0,
    stk = [],
    n = s.length,
    idxStk = []
  for (let i = 0; i < n; i++) {
    const ch = s[i]
    if (stk.length && stk[stk.length - 1] === '(' && ch === ')')
      stk.pop(), idxStk.pop()
    else stk.push(ch), idxStk.push(i)
    res = Math.max(res, i - (idxStk.length ? idxStk[idxStk.length - 1] : -1))
  }
  return res
}
