/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (
  s,
  start = 0,
  end = s.length,
  parentheses = findParentheses(s)
) {
  const stack = []
  let op = '+'
  let num = 0
  for (let i = start; i < end; i++) {
    const c = s[i]
    if (/[0-9]+/.test(c)) {
      const n = parseInt(c)
      num = 10 * num + n
    } else if (isOperator(c)) {
      compute(op, stack, num)
      op = c
      num = 0
    } else if (c === '(') {
      num = calculate(s, i + 1, parentheses[i], parentheses)
      i = parentheses[i]
    }
  }
  compute(op, stack, num)
  return stack.reduce((acc, cur) => acc + cur, 0)
}

function findParentheses(s) {
  const map = {}
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      map[stack.pop()] = i
    }
  }
  return map
}

function compute(op, stack, num) {
  if (op === '-') {
    stack.push(-num)
  } else if (op === '+') {
    stack.push(num)
  } else if (op === '*') {
    stack.push(stack.pop() * num)
  } else if (op === '/') {
    const pre = stack.pop()
    const sign = pre / num >= 0 ? 1 : -1
    const val = Math.floor(Math.abs(pre / num))
    stack.push(Math.floor(sign * val))
  }
}

function isOperator(c) {
  return c === '+' || c === '-' || c === '*' || c === '/'
}
