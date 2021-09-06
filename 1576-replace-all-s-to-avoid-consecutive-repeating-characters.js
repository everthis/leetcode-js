/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function(s) {
  const arr = s.split('')
  for(let i = 0, n = s.length; i < n; i++) {
    const cur = arr[i]
    if(cur === '?') {
      for(let j = 0, a = 'a'.charCodeAt(0); j < 26; j++) {
        const ch = String.fromCharCode(a + j)
        if(
          n === 1 ||
          (i === 0 && i < n - 1 && ch !== arr[i + 1]) ||
          (i > 0 && ch !== arr[i - 1] && i < n - 1 && ch !== arr[i + 1]) ||
          (i=== n -1 && i - 1 >= 0 && ch !== arr[i - 1])
        ) {
          
          arr[i] = ch
          break
        }
      }
    }
  }
  
  return arr.join('')
};


// another

/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function(s) {
  const arr = s.split('')
  for(let i = 0, n = s.length; i < n; i++) {
    const cur = arr[i]
    if(cur === '?') {
      for(let j = 0, a = 'a'.charCodeAt(0); j < 26; j++) {
        const ch = String.fromCharCode(a + j)
        if(
          (i === 0 || arr[i - 1] !== ch) &&
          (i === n - 1 || arr[i + 1] !== ch)
        ) {
          
          arr[i] = ch
          break
        }
      }
    }
  }
  
  return arr.join('')
};
