/**
 * @param {string} s
 * @return {string}
 */
 const minRemoveToMakeValid = function(s) {
  const stack = [], n = s.length
  const arr = s.split('')
  let res = ''
  for(let i = 0; i < n; i++) {
    if(s[i] === '(') stack.push(i + 1)
    if(s[i] === ')') {
      if(stack.length && stack[stack.length - 1] >= 0) stack.pop()
      else stack.push(-(i + 1))
    }
  }
  while(stack.length) {
    arr[Math.abs(stack.pop()) - 1] = ''
  }
  return arr.join('')
};
