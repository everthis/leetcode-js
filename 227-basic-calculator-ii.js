/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  if (!s || !s.length) return 0
  let n = 0
  let op = '+'
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    let isNumber = '0' <= c && c <= '9'
    if (isNumber) {
      n = n * 10 + +c
    }
    if ((!isNumber && c !== ' ') || i == s.length - 1) {
      if (op === '+') stack.push(n)
      else if (op === '-') stack.push(-n)
      else if (op === '*') stack.push(stack.pop() * n)
      else if (op === '/') stack.push(~~(stack.pop() / n))
      op = c
      n = 0
    }
  }
  return stack.reduce((a, b) => a + b, 0)
}
