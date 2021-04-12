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

// another

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
  const stack = [];
  s = s.split('');
  for (let i = 0; i < s.length;) {
    if (i === 0 || s[i] !== s[i - 1]) {
      stack.push(1);
      i++
    } else {
      stack[stack.length - 1]++;
      if (stack[stack.length - 1] === k) {
        stack.pop();
        s.splice(i - k + 1, k);
        i = i - k + 1;
      } else {
        i++
      }
    }
  }
  return s.join('');
};
