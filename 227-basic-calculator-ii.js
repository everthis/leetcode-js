/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  const stack = [], n = s.length
  let op = '+', num = 0
  for(let i = 0; i < n; i++) {
    const isNumber = s[i] >= '0' && s[i] <= '9'
    if(isNumber) num = num * 10 + (+s[i])
    if((!isNumber && s[i] !== ' ') || i === n - 1) {
      if(op === '+') stack.push(num)
      else if(op === '-') stack.push(-num)
      else if(op === '*') stack.push(stack.pop() * num)
      else if(op === '/') stack.push(~~(stack.pop() / num))
      op = s[i]
      num = 0
    }
  }
  
  return stack.reduce((ac, e) => ac + e, 0)
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  if(s == null || s.length === 0) return 0
  let sum = 0, num = 0, op = '+', tmp = 0
  const stack = []
  for(let i = 0; i < s.length; i++) {
    const ch = s[i]
    const isInt = ch => ch >= '0' && ch <= '9'
    if(isInt(ch)) {
      num = num * 10 + (+ch)
    }
    if((!isInt(ch) && ch !== ' ') || i === s.length - 1) {
      if(op === '+') {
        sum += tmp
        tmp = num
      }
      else if(op === '-') {
        sum += tmp
        tmp = - num
      }
      else if(op === '*') {
        tmp *= num
      }
      else if(op === '/') {
        tmp = ~~(tmp / num)
      }
      op = ch
      num = 0
    }

  }

  return sum + tmp
}
