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

// another

/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
  let cnt = 0
  let res = s.split('')
  // console.log(res)
  for(let i = 0; i < res.length; ) {
    const ch = res[i]
    if(ch === '(') cnt++
    if(ch === ')') cnt--
    if(cnt < 0) {
      // console.log(res, i)
      res.splice(i, 1)
      cnt++
    } else i++
  }
  // console.log(res)
  let idx = res.length - 1
  while(cnt > 0) {
    if(res[idx] === '(') {
      res.splice(idx, 1)
      cnt--
    } else idx--
  }
  return res.join('')
};
