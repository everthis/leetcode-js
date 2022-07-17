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

// another

/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  s = s.split(' ').join('')
  const n = s.length, stack = []
  const isNum = ch => ch >= '0' && ch <= '9'
  let num = 0, op = 1, res = 0
  for(let i = 0; i < n; i++) {
    const ch = s[i]
    if(isNum(ch)) {
      num = num * 10 + (+ch)
    } else {
      if(ch === '(') {
        stack.push(res)
        stack.push(op)
        num = 0
        op = 1
        res = 0
      } else if(ch === ')') {
        res += num * op
        res *= stack.pop()
        res += stack.pop()
        num = 0
        op = 1
      } else if(ch === '+') {
        res += op * num
        op = 1
        num = 0
      } else if(ch === '-') {
        res += op * num
        op = -1
        num = 0
      }
    }
  }
  
  return res + op * num
};

// another
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  s = s.trim()
  
  let res = 0, num = 0, op = 1
  const isDigit = ch => ch >= '0' && ch <= '9'
  const stk = []
  for(let i = 0, n = s.length; i < n; i++) {
    
    const e = s[i]
    if(e === ' ') continue
    if(isDigit(e)) num = num * 10 + (+e)
    else {
      
      if(e === '(') {
        stk.push(res)
        stk.push(op)
        
        res = 0
        num = 0
        op = 1
      } else if(e === ')') {
        res += num * op
        res *= stk.pop()
        res += stk.pop()
        op = 1
        num = 0
      } else if(e === '-') {
        res += num * op
        op = -1
        num = 0
      } else if(e === '+') {
        res += num * op
        op = 1
        num = 0
      }
    }
  }
  
  return res + num * op
};
