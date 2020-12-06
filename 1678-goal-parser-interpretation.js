/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(c) {
  const stack = [c[0]]
  const n = c.length
  let i = 1
  while(i < n) {
    if(c[i] === ')') {
      if(stack[stack.length - 1] === '(') {
        stack.pop()
        stack.push('o')
        i++
      } else {
        let res = ''
        while(stack[stack.length - 1] !== '(') {
          const tmp = stack.pop()
          res = tmp + res
        }
        stack.pop()
        stack.push(res)
        i++
      }
    } else {
      stack.push(c[i])
      i++
    }
  }
  return stack.join('')
};
