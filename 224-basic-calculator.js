/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  let stack = []
  let num = 0
  let sign = 1
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    if (char >= '0' && char <= '9') {
      num = num * 10 + parseInt(char, 10)
    } else if (char === '+') {
      res += sign * num
      sign = 1
      num = 0
    } else if (char === '-') {
      res += sign * num
      sign = -1
      num = 0
    } else if (char === '(') {
      stack.push(res)
      stack.push(sign)
      sign = 1
      res = 0
      num = 0
    } else if (char === ')') {
      res += sign * num
      res *= stack.pop()
      res += stack.pop()
      num = 0
    }
  }
  return res + sign * num
}
