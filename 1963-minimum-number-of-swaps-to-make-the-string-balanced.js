/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function(s) {
  const stack = []
  let num = 0
  for(let e of s) {
    if(e === '[') {
      stack.push(e)
      num++
    }
    if(e === ']') {
      if(stack[stack.length - 1] === '[') {
        stack.pop()
        num--
      }
    }
  }
  // console.log(num)
  return Math.ceil(num / 2)
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function(s) {
  let num = 0
  for(let e of s) {
    if(e === '[') {
      num++
    }
    if(e === ']') {
      if(num > 0) {
        num--
      }
    }
  }
  return Math.ceil(num / 2)
};
