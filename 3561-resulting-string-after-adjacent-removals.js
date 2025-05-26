/**
 * @param {string} s
 * @return {string}
 */
var resultingString = function (s) {
  let stack = []
  for (let c of s) {
    if (stack.length === 0) {
      stack.push(c)
    } else {
      if (
        (c === 'z' && stack[stack.length - 1] === 'a') ||
        (c === 'a' && stack[stack.length - 1] === 'z') ||
        Math.abs(c.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 1
      ) {
        stack.pop()
      } else {
        stack.push(c)
      }
    }
  }
  return stack.join('')
}
