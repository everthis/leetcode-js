/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
const countSubstrings = function(s, c) {
  const n = s.length
  const arr = []
  for(let i = 0; i < n; i++) {
    if(s[i] === c) {
      arr.push(i)
    }
  }
  let len = arr.length
  let res = 0
  while(len) {
    res += len
    len--
  }
  
  return res
};
