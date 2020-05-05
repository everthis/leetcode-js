/**
 * @param {string} s
 * @return {string}
 */
const longestPrefix = function(s) {
  return s.slice(0, dfa().pop())
  function dfa() {
    let i = 1
    let j = 0
    const len = s.length
    const prefix = Array(len + 1).fill(0)
    while(i < len) {
      if(s[j] === s[i]) {
        j++
        i++
        prefix[i] = j
      } else {
        if(j > 0) j = prefix[j]
        else {
          i++
          prefix[i] = 0
        }
      }
    }
    return prefix
  }  
};


