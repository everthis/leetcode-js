/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = function(s) {
  const len = s.length
  const stack = []
  let res = 0
  for(let i = 0; i < len; i++) {
    if(stack.length && stack[stack.length - 1] > s[i]) {
      res++
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return res
};
