/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function(s) {
  const res = ['']
  let control = 0
  let order = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      control++
      order = order ? 0 : 1
      res.push('')
    } else if (s[i] === ')') {
      if (order) res[control - 1] = res.pop() + res[control - 1]
      else res[control - 1] = res[control - 1] + res.pop()
      order = order ? 0 : 1
      control--
    } else {
      if (order) res[control] = res[control] + s[i]
      else res[control] = s[i] + res[control]
    }
  }
  return res[0]
}

// another

/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function(s) {
  const n = s.length
  const stack = []
  const pair = []
  for(let i = 0; i < n; i++) {
    if(s[i] === '(') stack.push(i)
    else if(s[i] === ')') {
      const tmp = stack.pop()
      pair[i] = tmp
      pair[tmp] = i
    }
  }
  let res = ''
  for(let i = 0, d = 1; i < n; i += d) {
    if(s[i] === '(' || s[i] ===')') {
      i = pair[i]
      d = -d
    } else {
      res += s[i]
    }
  }
  return res
}
