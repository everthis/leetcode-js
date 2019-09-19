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
