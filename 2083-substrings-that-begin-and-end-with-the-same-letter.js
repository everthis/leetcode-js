/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = function(s) {
  const hash = {}
  const n = s.length
  for(let i = 0; i < n; i++) {
    const ch = s[i]
    if(hash[ch] == null) hash[ch] = []
    hash[ch].push(i)
  }
  
  let res = 0
  const keys = Object.keys(hash)
  keys.forEach(k => {
    res += helper(k)
  })
  
  return res
  
  
  function helper(k) {
    const arr = hash[k]
    const len = arr.length
    return len * (len + 1) / 2
  }
};
