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
