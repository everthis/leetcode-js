/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
  const stack = []
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop() + stack.pop())
    } else if (token === '-') {
      stack.push(-stack.pop() + stack.pop())
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop())
    } else if (token === '/') {
      stack.push(Math.trunc((1 / stack.pop()) * stack.pop()))
    } else {
      stack.push(parseInt(token))
    }
  }
  return stack[0]
}
