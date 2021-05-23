/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = function(s) {
  const stack = []
  let zl = 0, ol = 0
  for(let e of s) {
    let tmp = 0, zo = ''
    while(stack.length && stack[stack.length - 1] !== e) {
      if(zo === '') zo = stack[stack.length - 1]
      tmp++
      stack.pop()
    }
    if(zo === '1') ol = Math.max(tmp, ol)
    if(zo === '0') zl = Math.max(tmp, zl)
    stack.push(e)
  } 
  if(stack.length) {
    let zo = stack[stack.length - 1]
    if(zo === '1') ol = Math.max(stack.length, ol)
    if(zo === '0') zl = Math.max(stack.length, zl)
  }
  return ol > zl
};
