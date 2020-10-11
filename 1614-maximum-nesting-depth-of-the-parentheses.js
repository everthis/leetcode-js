/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function(s) {
  const stack = []
  let res = 0
  for(let i = 0, len = s.length; i < len; i++) {
    if(s[i] === '(') {
      stack.push('(')
      res = Math.max(res, stack.length)
    } else if(s[i] === ')') {
      stack.pop()
    }
  }
  
  return res
};
