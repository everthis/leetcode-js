/**
 * @param {string} expression
 * @return {boolean}
 */
const parseBoolExpr = function(expression) {
  const stack = []
  for (let ch of expression) {
    if (ch === '|' || ch === '&' || ch === '!') stack.push(ch)
    if (ch === 't') stack.push(true)
    if (ch === 'f') stack.push(false)
    if (ch === ')') {
      const tmp = []
      while (stack.length) {
        let t = stack.pop()
        if (t === true || t === false) tmp.push(t)
        else {
          let res = tmp.pop()
          if (t === '|') {
            while (tmp.length) res = tmp.pop() || res
          } else if (t === '&') {
            while (tmp.length) res = tmp.pop() && res
          } else if (t === '!') {
            res = !res
          }
          stack.push(res)
          break
        }
      }
    }
  }
  return stack[0]
}
