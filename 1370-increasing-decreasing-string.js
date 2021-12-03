/**
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
  const arr = Array(26).fill(0), a = 'a'.charCodeAt(0)
  for(const ch of s) {
    arr[ch.charCodeAt(0) - a]++
  }
  
  let res = '', delta = 1
  const valid = arr => arr.every(e => e === 0)
  while(!valid(arr)) {
    if(delta > 0) {
      for(let i = 0; i< 26; i++) {
        if(arr[i]) {
          res += String.fromCharCode(a + i)
          arr[i]--
        }
      }
    } else {
      for(let i = 25; i >= 0; i--) {
        if(arr[i]) {
          res += String.fromCharCode(a + i)
          arr[i]--
        }
      }
    }
    delta = delta === 1 ? -1 : 1
  }
  return res
};
