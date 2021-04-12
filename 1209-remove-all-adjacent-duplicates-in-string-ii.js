/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
  const stack = [];
  const arr = s.split('')
  for(let i = 0; i < arr.length; i++) {
    if(i === 0 || arr[i] !== arr[i - 1]) {
      stack.push(1)
    } else {
      stack[stack.length - 1]++
      if(stack[stack.length - 1] === k) {
        stack.pop()
        arr.splice(i - k + 1, k)
        i -= k
      }
    }
    
  }
  return arr.join('')
};
