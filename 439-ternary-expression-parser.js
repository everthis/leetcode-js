/**
 * @param {string} expression
 * @return {string}
 */
const parseTernary = function(expression) {
  const N = expression.length
  const stack = [expression[N - 1]]
  for (let i = N - 2; i >= 0; i -= 2) {
    if (expression[i] === ':') {
      stack.push(expression[i - 1])
    } else {
      const l = stack.pop()
      const r = stack.pop()
      if (expression[i - 1] === 'T') {
        stack.push(l)
      } else {
        stack.push(r)
      }
    }
  }
  return stack[0]
}
