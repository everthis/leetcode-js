/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  if (s.length === 0) {
    return 0
  }
  let op = '+'
  let stack = []
  for (let i = 0, n = 0; i <= s.length; ++i) {
    let c = s.charAt(i)
    if (c === ' ') continue
    if (c >= '0' && c <= '9') {
      n = n * 10 + parseInt(c)
      continue
    }
    if (op === '+') {
      stack.push(n)
    } else if (op === '-') {
      stack.push(-n)
    } else if (op === '*') {
      stack.push(stack.pop() * n)
    } else if (op === '/') {
      stack.push(Math.trunc(stack.pop() / n))
    }
    op = c
    n = 0
  }
  return stack.reduce((n, acc) => n + acc, 0)
}
